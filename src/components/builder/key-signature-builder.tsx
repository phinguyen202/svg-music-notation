import React from 'react';
import Sharp from '@base/accidental/sharp';
import Flat from '@base/accidental/flat';
import { BuilderRender } from '@builder/builder.model';
import { YCoordinate, CoordinateModel } from '@model/common.model';

interface KeySignatureProps extends CoordinateModel {
    keySigNumber: number;
    accidentalMap: Map<string, number[]>
}

interface keySignatureBuilder extends BuilderRender, KeySignatureProps { }

const space: number = 2;

export function keySignatureBuilder(props: KeySignatureProps): keySignatureBuilder {
    const { keySigNumber } = props;
    let width: number = 0;
    if (keySigNumber) {
        if (keySigNumber > 0) {
            width = (keySigNumber * (Sharp.width + space)) - space;
        } else {
            width = (Math.abs(keySigNumber) * (Flat.width + space)) - space;
        }
    }

    return {
        ...props,
        width,
        height: 0,
        renderFunc: function() {
            const { x, y = 0, keySigNumber, accidentalMap } = this;
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
        }
    }
}