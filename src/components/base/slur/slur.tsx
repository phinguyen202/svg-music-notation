import React, { FunctionComponent } from 'react';

interface Props {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

const width: number = 0;
const height: number = 20;
const stroke: number = 5;

function JSX({ x1, y1, x2, y2 }: Props): JSX.Element {
    return (
        // <path d={`M ${x1} ${y1} Q ${xCenter} ${yCenter + height - stroke} ${x2} ${y2} M ${x2 + 2} ${y2} Q ${xCenter} ${yCenter + height} ${x1 - 2} ${y1} Z`} fill='back' />
        // <path d="M 10 10 C 20 20, 40 20, 50 10 M 52 10 C 45 25, 15 25, 8 10 Z" stroke="none" fill="back"/>
        <path d={`M ${x1} ${y1} C ${x1 + 10} ${y1 + 10}, ${x2 - 10} ${y2 + 10}, ${x2} ${y2} M ${x2 + 2} ${y2} C ${x2 - 5} ${y2 + 12}, ${x1 + 5} ${y1 + 12}, ${x1 - 2} ${y1} Z`} fill='back' />
    );
}

interface Slur {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as Slur;