import React from 'react';
import Staff from '@base/staff-ledger/staff';
import {
    SvgStaveSource, SvgElement, SvgElementType, SvgNoteElement, SvgBarlineElement, SvgTimeSignatureElement,
    SvgClefElement, SvgRestElement
} from '@model/source.model';
import { CoordinateModel, WidthDimension } from '@model/common.model';
import { noteBuilder, NoteProps } from 'components/builder/note-builder';
import { NoteConfig } from '@stave/stave.model';
import { RestMap, findKeySignatureMap, findNoteMap } from './mapping';
import { ClefType, PitchType } from '@model/business.model';
import { SvgKeySignatureElement } from '@model/source.model';
import { keySignatureBuilder } from '@builder/key-signature-builder';
import { restBuilder } from '@builder/rest-builder';
import { barlineBuilder } from '@builder/barline-builder';
import { TypeBuilderRender } from '@builder/builder.model';
import { clefBuilder } from '@builder/clef-builder';
import { timeSignatureBuilder } from '@builder/time-signature-builder';
import { slurBuilder } from '@builder/slur-builder';
import { DistanceType, distanceMap, lastEleDisUnit } from './mapping/distance.map';
import { next } from '@utils/idGenerator';
import { beamBuilder } from '@builder/beam-builder';
import HeadNote from '@base/note/head';
import { TrebleMidOrder } from './mapping/treble.note.map';
import { EighthNote } from '@base/note/eighth';

interface StaveProps extends SvgStaveSource, CoordinateModel, WidthDimension { }

interface PreRenderModel extends WidthDimension {
    renderArr: TypeBuilderRender[];
}

export default function Stave({ x = 0, y = 0, elements = [], slurs = [], width }: StaveProps) {
    // setting up clef
    let clef: ClefType = 'treble';
    let midOrder: number = 7;
    let beamLimitedTop: number = -35;
    let beamLimitedBottom: number = 75;
    if (elements.length && elements[0].type === 'clef') {
        const clefEle = elements[0] as SvgClefElement;
        clef = clefEle.clef;
        midOrder = TrebleMidOrder;
    }
    // PHASE 1: Calculate note distance
    // get stuff ready
    const keySignatureMap: Map<string, number[]> = findKeySignatureMap(clef);
    const noteMap: Map<PitchType, NoteConfig> = findNoteMap(clef);
    // loop and pre-render elements & sum width of elements
    const preRenderObj: PreRenderModel = elements.reduce((previous: PreRenderModel, element: SvgElement) => {
        const type: SvgElementType = element.type;
        let builtElement: TypeBuilderRender;
        if (type === 'clef') {
            builtElement = clefBuilder({ ...element as SvgClefElement, y: 0 });
        } else if (type === 'keySignature') {
            builtElement = keySignatureBuilder({ ...element as SvgKeySignatureElement, accidentalMap: keySignatureMap });
        } else if (type === 'timeSignature') {
            builtElement = timeSignatureBuilder({ ...element as SvgTimeSignatureElement, y: 10 });
        } else if (type === 'note') {
            const { pitch } = element as SvgNoteElement;
            const noteConfig: NoteConfig = noteMap.get(pitch);
            builtElement = noteBuilder({ ...element as SvgNoteElement, ...noteConfig });
        } else if (type === 'rest') {
            const { duration } = element as SvgRestElement;
            const restConfig = RestMap.get(duration);
            builtElement = restBuilder({ ...element as SvgRestElement, ...restConfig });
        } else if (type === 'barline') {
            builtElement = barlineBuilder({ ...element as SvgBarlineElement, height: 40, y: 10 });
        }
        if (builtElement) {
        previous.width += builtElement.width;
        previous.renderArr.push({ ...builtElement, type });
        }
        return previous;
    }, { width: 0, renderArr: [] } as PreRenderModel);

    // loop to sum static width/units of elements
    // if the last element is a barline (normal case) else adding lastEleDisUnit unit
    const isLastEleBar = elements[elements.length - 1].type === 'barline';
    const { staticWidth, units } = elements.reduce((previous: any, element: SvgElement) => {
        const disObj: DistanceType = distanceMap.get(element.type);
        if (disObj.type === 'static') {
            previous.staticWidth += disObj.unit;
        } else {
            previous.units += disObj.unit;
        }
        return previous
    }, { staticWidth: 0, units: isLastEleBar ? 0 : lastEleDisUnit });
    // calculate how long of an unit
    const disPerUnit = (width - preRenderObj.width - staticWidth) / units;

    // setting x for each element
    let { renderArr } = preRenderObj;
    let currentX: number = 0;
    renderArr = renderArr.map((element: TypeBuilderRender, index: number) => {
        const disObj: DistanceType = distanceMap.get(element.type);
        if (disObj.type === 'static') {
            currentX += disObj.unit;
        } else {
            currentX += disObj.unit * disPerUnit;
        }
        element.x = currentX;
        currentX += element.width;
        return element;
    });

    // PHASE 2: beam, slur..

    // get notes
    const noteElements = renderArr.filter((element: TypeBuilderRender) => element.type === 'note');

    // beams
    // grouping by beamGroup
    const newBeamsMap: Map<string, (TypeBuilderRender & NoteProps)[]> = noteElements.reduce((map: Map<string, (TypeBuilderRender & NoteProps)[]>, element: TypeBuilderRender & NoteProps & EighthNote) => {
        if (element.beamGroup && element.flagNumber) {
            if (map.has(element.beamGroup)) {
                map.get(element.beamGroup).push(element);
            } else {
                map.set(element.beamGroup, [element]);
            }
        }
        return map;
    }, new Map<string, (TypeBuilderRender & NoteProps)[]>());

    // for each group and change the way notes are built
    // applying beamed rules
    const beams: any[] = [];
    // eslint-disable-next-line prefer-const
    for (let [key, notes] of newBeamsMap.entries()) {
        if (notes.length < 2) {
            continue;
        }
        // direction (up or down) of beam based on average of order
        // if less than mid then down else up
        const isUp: boolean = notes.reduce((previous: number, note: any) => previous + note.order, 0) / notes.length < midOrder;

        const beamElements = notes.map((note: TypeBuilderRender & NoteProps & any) => {
            // update note
            note.width = HeadNote.width;
            note.height = HeadNote.height;
            note.JSX = HeadNote.JSX;
            note.isStemUp = isUp;
            let height = 30;
            if (isUp && (note.y - height) < beamLimitedTop) {
                height = Math.abs(beamLimitedTop - note.y);
            } else if (!isUp && (note.y + height) > beamLimitedBottom) {
                height = Math.abs(beamLimitedBottom - note.y);
            }
            return {
                height,
                x: isUp ? note.x + HeadNote.width : note.x,
                y: note.y + HeadNote.height / 2
            }
        });

        beams.push(beamBuilder({
            id: key,
            isUp,
            elements: beamElements
        }));
    }

    // slurs
    // getting new slurs
    const newSlurs = noteElements.reduce((previous: any[], element: TypeBuilderRender & NoteProps) => {
        const { id, slurTo } = element;
        if (slurTo && !slurs.some(s => s.from === id)) {
            const toElement = noteElements.find((element: TypeBuilderRender & NoteProps) => element.id === slurTo);
            if (toElement) {
                // start point stem is up => under
                // start point stem is down => over
                const { x, y, width, isStemUp } = element;
                if (isStemUp) {
                    previous.push(slurBuilder({ id: next(), x1: x + width, y1: y + width, x2: toElement.x, y2: toElement.y + width, place: 'under' }));
                } else {
                    previous.push(slurBuilder({ id: next(), x1: x + width, y1: y, x2: toElement.x, y2: toElement.y, place: 'over' }));
                }
            }
    }
        return previous;
    }, [] as any[]);

    const allSlurs = [...slurs, ...newSlurs];

    // PHASE 3: render
    const elementReactNodes = renderArr.map((element: TypeBuilderRender, index: number) => {
        return element.renderFunc();
    });

    const slurReactNodes = allSlurs.map((element: any, index: number) => {
        return element.renderFunc();
    });

    const beamReactNodes = beams.map((element: any, index: number) => {
        return element.renderFunc();
    });

    return (
        <g transform={`translate(${x}, ${y})`}>
            <Staff.JSX lineNumber={5} width={width} />
            {/* <text x="10" y="0.75em">𝄞</text> */}
            {elementReactNodes}
            {slurReactNodes}
            {beamReactNodes}
        </g>
    )
}