import React from "react";
import { MeasureModel, NoteModel } from "@model/business.model";
import { CoordinateModel, WidthDemension, YCoordinate } from '@model/common.model';
import TimeSignature from "@base/time-signature/time-signature";
import { NoteBuilder } from "components/builder/note-builder";
import Ledger from '@base/staff-ledger/ledger';
import { DurationType } from '@model/business.model';
import { RestSwitcher } from '../../switcher/rest-switcher';
import { BarlineSwitcher } from '../../switcher/barline-switcher';

const barlineHeight = 40;
const offset = 10;
const ledgerWidth = 22;

export function Measure({ x, y, width, timeSignature, notes, barline }: MeasureModel & CoordinateModel & WidthDemension) {
    let currentX = 0;
    const timeSignatureJsx = timeSignature && (currentX += offset) && <TimeSignature.JSX x={currentX} upper={timeSignature.upper} lower={timeSignature.lower} />;
    if (timeSignatureJsx) {
        currentX += TimeSignature.width;
    }
    // balance note (rest) width on measure
    currentX += -10;
    const spaceBetweenNote = (width - currentX) / (notes.length + 1);
    const mensureElements = notes.map(({ note, accidental, duration, dot }: NoteModel, index: number) => {
        if (note) {
            const noteCofig = noteCofigMap.get(note);
            if (!noteCofig) {
                throw new Error(`Not support pitch ${note} in clef stave`);
            }
            const { y, isStemUp, ledgers } = noteCofig;
            const ledgersJsx = ledgers && ledgers.map(ledgerY => {
                return <Ledger.JSX x={-5} y={ledgerY} width={ledgerWidth} />
            })
            return (
                <g transform={`translate(${currentX + (spaceBetweenNote * ++index)}, ${y})`}>
                    <NoteBuilder duration={duration} accidental={accidental} dot={dot} isStemUp={isStemUp} key={index} />
                    {ledgersJsx}
                </g>)
        } else { // rest
            const restBuilder = RestSwitcher({duration});
            let restY;
            if (restBuilder) {
                restY = restCofigMap.get(duration).y;
            }
            return restBuilder && <restBuilder.JSX x={currentX + (spaceBetweenNote * (index + 1))} y={restY}/>
        }
    });
    const barlineBuilder = BarlineSwitcher({barline: barline ? barline : 'barline'});
    return (
        <g transform={`translate(${x}, ${y})`}>
            {timeSignatureJsx}
            {mensureElements}
            {barlineBuilder && <barlineBuilder.JSX x={width - barlineBuilder.width} height={barlineHeight} />}
        </g>
    );
}

interface NoteCofig extends YCoordinate {
    isStemUp: boolean,
    ledgers?: Array<number>
}

const noteCofigMap: Map<string, NoteCofig> = new Map<string, NoteCofig>([
    ['C4', {
        y: 45,
        isStemUp: true,
        ledgers: [5]
    }],
    ['D4', {
        y: 40,
        isStemUp: true
    }],
    ['E4', {
        y: 35,
        isStemUp: true
    }],
    ['F4', {
        y: 30,
        isStemUp: true
    }],
    ['G4', {
        y: 25,
        isStemUp: true
    }],
    ['A4', {
        y: 20,
        isStemUp: true
    }],
    ['B4', {
        y: 15,
        isStemUp: false
    }],
    ['C5', {
        y: 10,
        isStemUp: false
    }],
    ['D5', {
        y: 5,
        isStemUp: false
    }],
    ['E5', {
        y: 0,
        isStemUp: false
    }],
    ['F5', {
        y: -5,
        isStemUp: false
    }],
    ['G5', {
        y: -10,
        isStemUp: false
    }],
    ['A5', {
        y: -15,
        isStemUp: false,
        ledgers: [5]
    }],
    ['B5', {
        y: -20,
        isStemUp: false,
        ledgers: [10]
    }],
    ['C6', {
        y: -25,
        isStemUp: false,
        ledgers: [5, 15]
    }],
]);

interface RestCofig extends YCoordinate { }

const restCofigMap: Map<DurationType, RestCofig> = new Map<DurationType, RestCofig>([
    ['whole', {
        y: 10
    }],
    ['half', {
        y: 16
    }],
    ['quarter', {
        y: 5,
    }],
    ['eighth', {
        y: 10
    }],
    ['sixteenth', {
        y: 0
    }]
]);