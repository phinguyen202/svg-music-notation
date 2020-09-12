import React from 'react';
import Staff from '@base/staff-ledger/staff';
import { SvgStaveSource, SvgElement } from '@model/source.model';
import { CoordinateModel } from '@model/common.model';
import { NoteBuilder } from 'components/builder/note-builder';

interface StaveProps extends SvgStaveSource, CoordinateModel { }

export default function Stave({ x = 0, y = 0, clef, elements = [] }: StaveProps) {

    const elementReactNode = elements.map(({ duration, pitch }: SvgElement, index: number) => {
        return <NoteBuilder x={index * 50} y={30} duration={duration} key={index} />
    });
    return (
        <g transform={`translate(${x}, ${y})`}>
            <Staff.JSX lineNumber={5} space={10} width={500} />
            {elementReactNode}
        </g>
    )
}