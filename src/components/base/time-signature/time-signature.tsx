import { CoordinateModel } from '@model/common.model';
import React, { FunctionComponent } from 'react';

interface Props extends CoordinateModel {
    upper: number;
    lower: number;
}

const width: number = 17;
const height: number = 53;

const textStyle = {
    font: 'bold 28px cambria'
}
function JSX({ upper, lower, x = 0, y = 0 }: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <text transform={`translate(${0}, ${20})`} style={textStyle}>{upper}</text>
            <text transform={`translate(${0}, ${40})`} style={textStyle}>{lower}</text>
        </g>
    );
}

interface TimeSignature {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as TimeSignature;