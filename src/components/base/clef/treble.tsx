import { CoordinateModel } from '@model/common.model';
import React, { FunctionComponent } from 'react';

interface Props extends CoordinateModel { }

const width: number = 22.22; 
const height: number = 65;

function JSX({ x = 0, y = 0 }: Props): JSX.Element {
    return (
        <text x={x} y="0.75em">𝄞</text>
    );
}

interface TrebleClef {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as TrebleClef;