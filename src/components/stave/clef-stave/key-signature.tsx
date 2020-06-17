import React from "react";
import { CoordinateModel } from "@model/common.model";
import Sharp from '@base/accidental/sharp';
import Flat from '@base/accidental/flat';

interface KeySignatureProps extends CoordinateModel {
    keySigNumber: number;
}

const trebleKeyMap: Map<string, number[]> = new Map<string, number[]>([
    ['flat', [25, 10, 30, 15, 35, 20, 40]],
    ['sharp', [5, 20, 0, 15, 30, 10, 25]],
]);

interface KeySignature {
    JSXElement: JSX.Element,
    width: number
}
const space: number = 5;
export function KeySignature({ x = 0, y = 0, keySigNumber }: KeySignatureProps): KeySignature {
    let keySignature;
    let width: number = 0;
    if (keySigNumber) {
        if (keySigNumber > 0) {
            width = keySigNumber * (Sharp.width + space);
            keySignature = trebleKeyMap.get('sharp').slice(0, keySigNumber).map((keyY: number, index: number) => {
                return <Sharp.JSX x={index * (Sharp.width + space)} y={keyY} key={index} />
            });
        } else {
            width = Math.abs(keySigNumber) * (Flat.width + space);
            keySignature = trebleKeyMap.get('flat').slice(0, Math.abs(keySigNumber)).map((keyY: number, index: number) => {
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