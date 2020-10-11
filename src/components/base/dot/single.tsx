import { CoordinateModel } from '@model/common.model';
import React, { FunctionComponent } from 'react';

interface Props extends CoordinateModel {}

const width: number = 4;
const height: number = 4;

function JSX({ x = 0, y = 0 }: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <circle cx={2} cy={2} r='2'/>
        </g>
    );
}

interface SingleDot {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as SingleDot;