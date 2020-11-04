import React from 'react';
import Staff from '@base/staff-ledger/staff';
import { SvgStaveSource, SvgElement, SvgElementType, SvgNoteElement, SvgBarlineElement, SvgTimeSignatureElement, SvgClefElement, SvgRestElement } from '@model/source.model';
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

interface StaveProps extends SvgStaveSource, CoordinateModel, WidthDimension { }

interface PreRenderModel extends WidthDimension {
    renderArr: TypeBuilderRender[]
}

export default function Stave({ x = 0, y = 0, clef = 'treble', elements = [], width }: StaveProps) {
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
        previous.width += builtElement.width;
        previous.renderArr.push({ ...builtElement, type });
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
    // Using group field to beam and slur field to slur 
    // group by beamGroup and slurPair
    // group by slurPair
    const slurMap = renderArr.filter((element: TypeBuilderRender) => element.type === 'note')
        .reduce((previous: Map<number, TypeBuilderRender[]>, element: TypeBuilderRender & NoteProps) => {
            const { slurPair } = element;
            if (!isNaN(slurPair)) {
                const group = previous.get(slurPair);
                const newGroup = (group ? group : []).concat(element);
                previous.set(slurPair, newGroup);
            }
            return previous;
        }, new Map<number, TypeBuilderRender[]>([]));

    const slurs: any[] = [];
    slurMap.forEach((elementGroup: TypeBuilderRender[]) => {
        const startEle = elementGroup[0];
        const endEle = elementGroup[1];
        // 4 cases
        // all Stem is Up => slur direction is over
        // all Stem is down => slur direction is under
        // start point stem is up and end point is down
        // start point stem is down and end point is up
        slurs.push(slurBuilder({ x1: startEle.x + startEle.width, y1: startEle.y + startEle.width, x2: endEle.x, y2: endEle.y + startEle.width, place: 'under' }));
    });

    // PHASE 3: render
    const elementReactNodes = renderArr.map((element: TypeBuilderRender, index: number) => {
        return element.renderFunc();
    });

    const slurReactNodes = slurs.map((element: any, index: number) => {
        return element.renderFunc();
    });

    return (
        <g transform={`translate(${x}, ${y})`}>
            <Staff.JSX lineNumber={5} space={10} width={width} />
            {elementReactNodes}
            {slurReactNodes}
        </g>
    )
}