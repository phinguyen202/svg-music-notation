import React from 'react';
import Staff from '@base/staff-ledger/staff';
import { SvgStaveSource, SvgElement, SvgElementType, SvgNoteElement, SvgBarlineElement, SvgTimeSignatureElement, SvgClefElement, SvgRestElement } from '@model/source.model';
import { CoordinateModel, WidthDimension } from '@model/common.model';
import { noteBuilder } from 'components/builder/note-builder';
import { NoteCofig } from './stave.model';
import { TrebleNoteMap, RestMap, TrebleKeySignatureMap } from './mapping';
import { ClefType, PitchType } from '@model/business.model';
import { SvgKeySignatureElement } from '@model/source.model';
import { keySignatureBuilder } from '@builder/key-signature-builder';
import { restBuilder } from '@builder/rest-builder';
import { barlineBuilder } from '@builder/barline-builder';
import { BuilderRender } from '@builder/builder.model';
import { clefBuilder } from '@builder/clef-builder';
import { timeSignatureBuilder } from '@builder/time-signature-builder';

interface StaveProps extends SvgStaveSource, CoordinateModel, WidthDimension { }

interface BuilderRenderExt extends BuilderRender {
    type: SvgElementType;
};

interface PreRenderModel extends WidthDimension {
    renderArr: BuilderRenderExt[]
}
// for edit mode
const distanceRatio = 10;

interface DistanceType {
    type: 'static' | 'dynamic';
    unit: number;
}

const distanceMap: Map<SvgElementType, DistanceType> = new Map<SvgElementType, DistanceType>([
    ['clef', { type: 'static', unit: 10 }],
    ['keySignature', { type: 'static', unit: 10 }],
    ['timeSignature', { type: 'static', unit: 10 }],
    ['note', { type: 'dynamic', unit: 5 }],
    ['rest', { type: 'dynamic', unit: 5 }],
    ['barline', { type: 'dynamic', unit: 5 }],
]);
const lastEleDisUnit: number = 5;

export default function Stave({ x = 0, y = 0, clef = 'treble', elements = [], width }: StaveProps) {
    // PHASE 1: Calculate note distance
    // get stuff ready
    const keySignatureMap: Map<string, number[]> = findKeySignatureMap(clef);
    const noteMap: Map<PitchType, NoteCofig> = findNoteMap(clef);
    // loop and pre-render elements & sum width of elements
    const preRenderObj: PreRenderModel = elements.reduce((previous: PreRenderModel, element: SvgElement) => {
        const type: SvgElementType = element.type;
        let builtElement: BuilderRender;
        if (type === 'clef') {
            builtElement = clefBuilder({ ...element as SvgClefElement, y: 0 });
        } else if (type === 'keySignature') {
            const { keySigNumber } = element as SvgKeySignatureElement;
            builtElement = keySignatureBuilder({ keySigNumber, accidentalMap: keySignatureMap });
        } else if (type === 'timeSignature') {
            builtElement = timeSignatureBuilder({ ...element as SvgTimeSignatureElement, y: 10 });
        } else if (type === 'note') {
            const { pitch } = element as SvgNoteElement;
            const noteConfig = noteMap.get(pitch);
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
    renderArr = renderArr.map((element: BuilderRenderExt, index: number) => {
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

    // PHASE 3: render
    const elementReactNodes = renderArr.map((element: BuilderRenderExt, index: number) => {
        return element.renderFunc();
    });

    return (
        <g transform={`translate(${x}, ${y})`}>
            <Staff.JSX lineNumber={5} space={10} width={width} />
            {elementReactNodes}
        </g>
    )
}

function findNoteMap(clef: ClefType): Map<PitchType, NoteCofig> {
    if (clef === 'treble') {
        return TrebleNoteMap;
    }
}

function findKeySignatureMap(clef: ClefType): Map<string, number[]> {
    if (clef === 'treble') {
        return TrebleKeySignatureMap;
    }
}