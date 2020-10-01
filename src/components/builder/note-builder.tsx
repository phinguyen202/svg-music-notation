import React from 'react';
import { YCoordinate } from '@model/common.model';
import { AccidentalType, DotType, DurationType } from '@model/business.model';
import { DotBuilder } from '@builder/dot-builder';
import WholeNote from '@base/note/whole';
import HalfNote from '@base/note/half';
import QuarterNote from '@base/note/quarter';
import EighthNote from '@base/note/eighth';
import SixteenthNote from '@base/note/sixteenth';
import { AccidentalUpstreamBuilder } from '@builder/accidental-builder';
import Ledger from '@base/staff-ledger/ledger';
import { BuilderRender } from '@builder/builder.model';

interface Props extends YCoordinate {
    accidental?: AccidentalType;
    dot?: DotType;
    duration: DurationType;
    isStemUp?: boolean;
    ledgers?: Array<number>
}

export interface Note extends BuilderRender {
    height: number;
}

const space: number = 2;

export function noteBuilder({ duration, accidental, dot, y = 0, isStemUp = true, ledgers }: Props): Note {
    const ledgersJsx = ledgers && ledgers.map(ledgerY => {
        return <Ledger.JSX x={-5} y={ledgerY} />
    });
    let renderFunc: (x: number) => JSX.Element;
    switch (duration) {
        case 'whole':
            return {
                width: WholeNote.width,
                height: WholeNote.height,
                renderFunc: (x: number) => (<g transform={`translate(${x}, ${y})`}>
                    <WholeNote.JSX />
                    { dot && <DotBuilder type={dot} x={WholeNote.width + space} y={WholeNote.height / 2 - space} />}
                    { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                    { ledgersJsx}
                </g>)
            };
        case 'half':
            return {
                width: HalfNote.width,
                height: HalfNote.height,
                renderFunc: (x: number) => (<g transform={`translate(${x}, ${y})`}>
                    <HalfNote.JSX isStemUp={isStemUp} />
                    { dot && <DotBuilder type={dot} x={HalfNote.width + space} y={HalfNote.height / 2 - space} />}
                    { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                    { ledgersJsx}
                </g>)
            };
        case 'quarter':
            return {
                width: QuarterNote.width,
                height: QuarterNote.height,
                renderFunc: (x: number) => (<g transform={`translate(${x}, ${y})`}>
                    <QuarterNote.JSX isStemUp={isStemUp} />
                    { dot && <DotBuilder type={dot} x={QuarterNote.width + space} y={QuarterNote.height / 2 - space} />}
                    { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                    { ledgersJsx}
                </g>)
            };
        case 'eighth':
            return {
                width: EighthNote.width,
                height: EighthNote.height,
                renderFunc: (x: number) => (<g transform={`translate(${x}, ${y})`}>
                    <EighthNote.JSX isStemUp={isStemUp} />
                    { dot && <DotBuilder type={dot} x={EighthNote.width + space} y={EighthNote.height / 2 - space} />}
                    { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                    { ledgersJsx}
                </g>)
            };
        case 'sixteenth':
            return {
                width: SixteenthNote.width,
                height: SixteenthNote.height,
                renderFunc: (x: number) => (<g transform={`translate(${x}, ${y})`}>
                    <SixteenthNote.JSX isStemUp={isStemUp} />
                    { dot && <DotBuilder type={dot} x={SixteenthNote.width + space} y={SixteenthNote.height / 2 - space} />}
                    { accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                    { ledgersJsx}
                </g>)
            };
        default:
            return undefined;
    }
}