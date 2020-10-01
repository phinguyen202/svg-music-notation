import React from 'react';
import Sharp from '@base/accidental/sharp';
import Flat from '@base/accidental/flat';
import { BuilderRender } from '@builder/builder.model';
import { YCoordinate } from '@model/common.model';

interface KeySignatureProps extends YCoordinate {
    keySigNumber: number;
    accidentalMap: Map<string, number[]>
}

interface keySignatureBuilder extends BuilderRender { }

const space: number = 2;

export function keySignatureBuilder({ y = 0, keySigNumber, accidentalMap }: KeySignatureProps): keySignatureBuilder {
    let width: number = 0;
    if (keySigNumber) {
        if (keySigNumber > 0) {
            width = (keySigNumber * (Sharp.width + space)) - space;
        } else {
            width = (Math.abs(keySigNumber) * (Flat.width + space)) - space;
        }
    }
    const renderFunc: Function = (x: number) => {
        let keySignature;
        if (keySigNumber > 0) {
            keySignature = accidentalMap.get('sharp').slice(0, keySigNumber).map((keyY: number, index: number) => {
                return <Sharp.JSX x={index * (Sharp.width + space)} y={keyY} key={index} />
            });
        } else {
            keySignature = accidentalMap.get('flat').slice(0, Math.abs(keySigNumber)).map((keyY: number, index: number) => {
                return <Flat.JSX x={index * (Flat.width + space)} y={keyY} key={index} />
            });
        }
        return (<g transform={`translate(${x}, ${y})`}>
            {keySignature}
        </g>)
    };

    return {
        renderFunc,
        width,
        height: 0
    }
}