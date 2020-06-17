import React from "react";
import { CoordinateModel } from "../model/common.model";
import { Accidental } from "./accidental";

interface KeySignatureProps extends CoordinateModel {
    clef: string;
    keySigNumber: number;
}

const trebleKeyMap: Map<string, number[]> = new Map<string, number[]>([
    ['flat', [15, 0, 20, 5, 25, 10, 30]],
    ['sharp', [-5, 10, -10, 5, 20, 0, 15]],
]);

const bassKeyMap: Map<string, number[]> = new Map<string, number[]>([
    ['flat', [15, 0, 20, 5, 25, 10, 30]],
    ['sharp', [-5, 10, -10, 5, 20, 0, 15]],
]);

export function KeySignature(props: KeySignatureProps) {
    const { x, y, clef, keySigNumber } = props;
    // console.log(x,y,clef, keySigNumber);
    
    let keySignature;
    switch (clef) {
        case 'treble':
            if (keySigNumber) {
                if (keySigNumber > 0) {
                    keySignature = trebleKeyMap.get('sharp').slice(0, keySigNumber).map((yStart: number, index: number) => {
                        return <Accidental name='sharp' x={10 + index * 10} y={yStart} key={index} />
                    });
                    break;
                } else {
                    keySignature = trebleKeyMap.get('flat').slice(0, Math.abs(keySigNumber)).map((yStart: number, index: number) => {
                        return <Accidental name='flat' x={10 + index * 10} y={yStart} key={index} />
                    });
                    break;
                }
            }
            break;
        case 'bass':
            break;
        default:
            break;
    }
    // console.log(keySignature);
    
    return (
        <g transform={`translate(${x}, ${y})`}>
            {keySignature}
        </g>
    );
}