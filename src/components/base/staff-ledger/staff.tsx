import React, { FunctionComponent } from 'react';
import { CoordinateModel } from '@model/common.model';

interface Props extends CoordinateModel {
    lineNumber: number;
    width: number;
}

function JSX({ lineNumber, width, y = 0, x = 0 }: Props): JSX.Element {
    const lines = (new Array(lineNumber)).fill(0).map((data: any, index: number) => {
        const yLine = index * 0.25;
        return <line x2={width} y1={`${yLine}em`} y2={`${yLine}em`} key={index} />
    });
    return (
        <g transform={`translate(${x}, ${y})`} stroke='black' strokeWidth='0.5'>
            {lines}
        </g>
    );
}

interface Staff {
    JSX: FunctionComponent<Props>
}

export default {
    JSX
} as Staff;