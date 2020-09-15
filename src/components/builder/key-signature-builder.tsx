import React from 'react';
import { CoordinateModel } from '@model/common.model';
import Sharp from '@base/accidental/sharp';
import Flat from '@base/accidental/flat';

interface KeySignatureProps extends CoordinateModel {
    keySigNumber: number;
    accidentalMap: Map<string, number[]>
}

interface KeySignature {
    JSXElement: JSX.Element,
    width: number
}
const space: number = 2;

export function KeySignature({ x = 0, y = 0, keySigNumber, accidentalMap }: KeySignatureProps): KeySignature {
    let keySignature;
    let width: number = 0;
    if (keySigNumber) {
        if (keySigNumber > 0) {
            width = (keySigNumber * (Sharp.width + space)) - space;
            keySignature = accidentalMap.get('sharp').slice(0, keySigNumber).map((keyY: number, index: number) => {
                return <Sharp.JSX x={index * (Sharp.width + space)} y={keyY} key={index} />
            });
        } else {
            width = (Math.abs(keySigNumber) * (Flat.width + space)) - space;
            keySignature = accidentalMap.get('flat').slice(0, Math.abs(keySigNumber)).map((keyY: number, index: number) => {
                return <Flat.JSX x={index * (Flat.width + space)} y={keyY} key={index} />
            });
        }
    }

    const JSXElement = (
        <g transform={`translate(${x}, ${y})`}>
            {keySignature}
        </g>
    );
    return {
        JSXElement,
        width
    }
}