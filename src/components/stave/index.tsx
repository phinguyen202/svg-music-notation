import React from 'react';
import Staff from '@base/staff-ledger/staff';
import { SvgStaveSource, SvgElement, SvgElementType, SvgNoteElement, SvgBarlineElement, SvgTimeSignatureElement } from '@model/source.model';
import { CoordinateModel } from '@model/common.model';
import { NoteBuilder } from 'components/builder/note-builder';
import { NoteCofig } from './stave.model';
import { TrebleNoteMap, RestMap, TrebleKeySignatureMap } from './mapping'
import { ClefType, PitchType } from '@model/business.model';
import { RestSwitcher } from '@switcher/rest-switcher';
import TrebleClef from '@base/clef/treble';
import { BarlineSwitcher } from '../switcher/barline-switcher';
import { SvgKeySignatureElement } from '../../model/source.model';
import { KeySignature } from '../builder/key-signature-builder';
import TimeSignature from '@base/time-signature/time-signature';

interface StaveProps extends SvgStaveSource, CoordinateModel { }

export default function Stave({ x = 0, y = 0, clef = 'treble', elements = [] }: StaveProps) {
    // get stuff ready
    const keySignatureMap: Map<string, number[]> = findKeySignatureMap(clef);
    const noteMap: Map<PitchType, NoteCofig> = findNoteMap(clef);
    // render
    const elementReactNode = elements.map((element: SvgElement, index: number) => {
        const type: SvgElementType = element.type;
        if (type === 'clef') {
            return <TrebleClef.JSX x={index * 50} />
        } else if (type === 'keySignature') {
            const { keySigNumber } = element as SvgKeySignatureElement;
            const keySigReactNode = KeySignature({ x: index * 50, keySigNumber, accidentalMap: keySignatureMap });
            return keySigReactNode.JSXElement;
        } else if (type === 'timeSignature') {
            const { upper, lower } = element as SvgTimeSignatureElement;
            return <TimeSignature.JSX x={index * 50} y={10} upper={upper} lower={lower} />;
        } else if (type === 'note') {
            const { duration, pitch } = element as SvgNoteElement;
            const { y, isStemUp, ledgers } = noteMap.get(pitch);
            return <NoteBuilder
                x={index * 50}
                y={y}
                duration={duration}
                isStemUp={isStemUp}
                ledgers={ledgers}
                key={index}
            />
        } else if (type === 'rest') {
            const { duration } = element as SvgNoteElement;
            const restBuilder = RestSwitcher({ duration });
            const { y } = RestMap.get(duration);
            return <restBuilder.JSX
                x={index * 50}
                y={y}
            />
        } else if (type === 'barline') {
            const { kind } = element as SvgBarlineElement;
            const barLineReactNode = BarlineSwitcher(kind);
            return <barLineReactNode.JSX
                height={40}
                x={index * 50}
                y={10}
            />
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
        return TrebleNoteMap;
    }
}

function findKeySignatureMap(clef: ClefType): Map<string, number[]> {
    if (clef === 'treble') {
        return TrebleKeySignatureMap;
    }
}