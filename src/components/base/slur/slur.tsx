import React, { FunctionComponent } from 'react';
import TrigonometryMath from '@utils/math';

interface Props {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

const width: number = 0;
const height: number = 20;

const curLength = 20;
const extLength = 2;
function JSX({ x1, y1, x2, y2 }: Props): JSX.Element {
    const ac = Math.abs(x2 - x1);
    const bc = Math.abs(y2 - y1);
    const a1Degree = TrigonometryMath.atan(bc / ac);
    const a2Degree = Math.abs(45 - a1Degree);
    const ad = TrigonometryMath.cos(a2Degree) * curLength;
    const dt = TrigonometryMath.sin(a2Degree) * curLength;
    const curAx = x1 + ad;
    const curAy = y1 + dt;
    const curBx = x2 - dt;
    const curBy = y2 + ad;
    const ad1 = TrigonometryMath.cos(a1Degree) * extLength;
    const a1d1 = TrigonometryMath.sin(a1Degree) * extLength;
    const a1x = x1 - ad1;
    const a1y = y1 + a1d1;
    const b1x = x2 + ad1;
    const b1y = y2 - a1d1;
    const curA1x = a1x + ad + 3;
    const curA1y = a1y + dt + 3;
    const curB1x = b1x - dt + 3;
    const curB1y = b1y + ad + 3;
    return (
        <path d={`M ${x1} ${y1} C ${curAx} ${curAy}, ${curBx} ${curBy}, ${x2} ${y2} L ${b1x} ${b1y} C ${curB1x} ${curB1y}, ${curA1x} ${curA1y}, ${a1x} ${a1y} Z`} strokeWidth={0.1} stroke='black' fill='black' />
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