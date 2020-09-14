import React from 'react';
import Staff from '@base/staff-ledger/staff';
import { SvgStaveSource, SvgElement, SvgElementType, SvgNoteElement } from '@model/source.model';
import { CoordinateModel } from '@model/common.model';
import { NoteBuilder } from 'components/builder/note-builder';
import { NoteCofig } from './stave.model';
import { TrebleMap } from './mapping'
import { ClefType, PitchType } from '@model/business.model';

interface StaveProps extends SvgStaveSource, CoordinateModel { }

export default function Stave({ x = 0, y = 0, clef = 'treble', elements = [] }: StaveProps) {

    // get stuff ready
    const noteMap: Map<PitchType, NoteCofig> = findNoteMap(clef);

    // render
    const elementReactNode = elements.map((element: SvgElement, index: number) => {
        const type: SvgElementType = element.type;
        if (type === 'note') {
            const noteElement: SvgNoteElement = element;
            const { duration, pitch } = noteElement;
            return <NoteBuilder x={index * 50} y={30} duration={duration} key={index} />
        } else if (type === 'rest') {
            return <text>Test</text>
        }
    });
    return (
        <g transform={`translate(${x}, ${y})`}>
            <Staff.JSX lineNumber={5} space={10} width={500} />
            {elementReactNode}
        </g>
    )
}

function findNoteMap(clef: ClefType): Map<PitchType, NoteCofig> {
    if (clef === 'treble') {
        return TrebleMap;
    }
}