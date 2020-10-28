import React, { FunctionComponent } from 'react';
import TrigonometryMath from '@utils/math';
import { QuadraticEquationResult, quadraticEquationSolver } from '@utils/quadraticEquation';
import { CoordinateModel } from '@model/common.model';
type SlurPlace = 'over' | 'under';
interface Props {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    place?: SlurPlace;
}

const width: number = 0;
const height: number = 20;

const curLength = 20;
const extLength = 2;
function JSX({ x1, y1, x2, y2, place = 'under' }: Props): JSX.Element {
    // called AB: y = ax + b
    // yA = axA + b
    // yB = axB + b
    // yA - yB = a(xA - xB)
    const a = (y2 - y1) / (x2 - x1);
    const b = y1 - a * x1;

    // call H is "center" of AB
    const xH = (x1 + x2) / 2;
    const yH = (y1 + y2) / 2;

    // called CH ⊥ AB
    // => CH: y = a1x + b1 => a*a1 = -1 => a1 = -1/a
    const a1 = -1 / a;
    const b1 = yH - a1 * xH;

    const dAH = Math.sqrt(Math.pow((x1 - xH), 2) + Math.pow((y1 - yH), 2));
    const dHC = dAH * TrigonometryMath.tan(45); // actually dAH = dHC because 45 degrees
    // called c: xC, yC is needed position 
    // (xC - xH)^2 + (yC - yH)^2 = dHC^2
    // PTB2 a1 * x2 + b1 * x + c = 0
    // => a = 1 + a1^2
    // => b = -2xH + 2a1b1 -2a1yH = -2(xH -a1b1 + ayH);
    // => c = -(dHC^2) + xH^2 + yH^2 + b1^2 - 2b1yH
    const re: QuadraticEquationResult = quadraticEquationSolver(1 + Math.pow(a1, 2), -2 * (xH - a1 * b1 + a1 * yH), -(Math.pow(dHC, 2)) + Math.pow(xH, 2) + Math.pow(yH, 2) + Math.pow(b1, 2) - 2 * b1 * yH);
    const c1: CoordinateModel = {
        x: re.result1,
        y: a1 * re.result1 + b1
    };
    const c2: CoordinateModel = {
        x: re.result2,
        y: a1 * re.result2 + b1
    };

    let c;
    if (place === 'under') {
        c = c1.y >= c2.y ? c1 : c2;
    } else {
        c = c1.y >= c2.y ? c2 : c1;
    }

    const curAx = c.x;
    const curAy = c.y;
    const curBx = c.x;
    const curBy = c.y;
    return (
        <>
            {/* <path d={`M ${x1} ${y1} C ${curAx} ${curAy}, ${curBx} ${curBy}, ${x2} ${y2} L ${b1x} ${b1y} C ${curB1x} ${curB1y}, ${curA1x} ${curA1y}, ${a1x} ${a1y} Z`} strokeWidth={0.1} stroke='black' fill='none' /> */}
            <path d={`M ${x1} ${y1} C ${curAx} ${curAy}, ${curBx} ${curBy}, ${x2} ${y2} `} strokeWidth={0.5} stroke='black' fill='none' />
        </>
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