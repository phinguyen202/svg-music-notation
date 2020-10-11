import React from 'react';
import { YCoordinate, CoordinateModel } from '@model/common.model';
import { AccidentalType, DotType, DurationType } from '@model/business.model';
import { DotBuilder } from '@builder/dot-builder';
import WholeNote from '@base/note/whole';
import HalfNote from '@base/note/half';
import QuarterNote from '@base/note/quarter';
import EighthNote from '@base/note/eighth';
import SixteenthNote from '@base/note/sixteenth';
import { AccidentalUpstreamBuilder } from '@builder/accidental-builder';
import Ledger from '@base/staff-ledger/ledger';
import { TypeBuilderRender } from '@builder/builder.model';
import { SvgNoteElement } from '@model/source.model';
import { NoteConfig } from '@stave/stave.model';

export interface NoteProps extends SvgNoteElement, NoteConfig, CoordinateModel {}
const space: number = 2;

export function noteBuilder(props: NoteProps): TypeBuilderRender & NoteProps {
    const { duration } = props;
    let note: any;
    switch (props.duration) {
        case 'whole':
            note = WholeNote;
            break;
        case 'half':
            note = HalfNote;
            break;
        case 'quarter':
            note = QuarterNote;
            break;
        case 'eighth':
            note = EighthNote;
            break;
        case 'sixteenth':
            note = SixteenthNote;
            break;
        default:
            if (!duration) {
                throw Error('Note duration is undefined');
            } else {
                throw Error(`Invalid duration: ${duration}`);
            }
    }
    return {
        ...props,
        ...note,
        renderFunc: function () {
            const {  x = 0, y = 0, duration, accidental, dot, isStemUp = true, ledgers, width, height, JSX } = this;
            const ledgersJsx = ledgers && ledgers.map((y: number) => {
                return <Ledger.JSX x={-5} y={y} />
            });
            return (<g transform={`translate(${x}, ${y})`}>
                <JSX isStemUp={isStemUp} />
                {dot && <DotBuilder type={dot} x={width + space} y={height / 2 - space} />}
                {accidental && <AccidentalUpstreamBuilder type={accidental} distanceSpace={space} />}
                {ledgersJsx}
            </g>)
        }
    };
}