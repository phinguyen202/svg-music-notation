import React from 'react';
import { CoordinateModel } from '@model/common.model';
import { AccidentalType, DotType, DurationType } from '@model/business.model';
import { DotBuilder } from './dot-builder';
import WholeNote from '@base/note/whole';
import HalfNote from '@base/note/half';
import QuarterNote from '@base/note/quarter';
import EighthNote from '@base/note/eighth';
import SixteenthNote from '@base/note/sixteenth';
import { AccidentalUpstreamBuilder } from '@builder/accidental-builder';
import Ledger from '@base/staff-ledger/ledger';

interface Props extends CoordinateModel {
    accidental?: AccidentalType;
    dot?: DotType;
    duration: DurationType;
    isStemUp?: boolean;
    ledgers?: Array<number>
}

const space: number = 2;

export function NoteBuilder({ duration, accidental, dot, x = 0, y = 0, isStemUp = true, ledgers }: Props): JSX.Element {
    const ledgersJsx = ledgers && ledgers.map(ledgerY => {
        return <Ledger.JSX x={-5} y={ledgerY} />
    });
    switch (duration) {
        case 'whole':
            return (<g transform={`translate(${x}, ${y})`}>
                <WholeNote.JSX />
                { dot && <DotBuilder type={dot} x={WholeNote.width + space} y={WholeNote.height / 2 - space} />}
                { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                { ledgersJsx}
            </g>)
        case 'half':
            return (<g transform={`translate(${x}, ${y})`}>
                <HalfNote.JSX isStemUp={isStemUp} />
                { dot && <DotBuilder type={dot} x={WholeNote.width + space} y={WholeNote.height / 2 - space} />}
                { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                { ledgersJsx}
            </g>)
        case 'quarter':
            return (<g transform={`translate(${x}, ${y})`}>
                <QuarterNote.JSX isStemUp={isStemUp} />
                { dot && <DotBuilder type={dot} x={WholeNote.width + space} y={WholeNote.height / 2 - space} />}
                { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                { ledgersJsx}
            </g>)
        case 'eighth':
            return (<g transform={`translate(${x}, ${y})`}>
                <EighthNote.JSX isStemUp={isStemUp} />
                { dot && <DotBuilder type={dot} x={WholeNote.width + space} y={WholeNote.height / 2 - space} />}
                { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                { ledgersJsx}
            </g>)
        case 'sixteenth':
            return (<g transform={`translate(${x}, ${y})`}>
                <SixteenthNote.JSX isStemUp={isStemUp} />
                { dot && <DotBuilder type={dot} x={WholeNote.width + space} y={WholeNote.height / 2 - space} />}
                { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                { ledgersJsx}
            </g>)
        default:
            return undefined;
    }
}