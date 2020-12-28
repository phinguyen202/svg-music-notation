import React, { FunctionComponent } from 'react';
import { QuadraticEquationResult, quadraticEquationSolver } from '@utils/quadraticEquation';
import { CoordinateModel, PointModel, TwoPointModel } from '@model/common.model';
import { findPointsOnAB, findPerpendicularPointsBasedOnAB, TwoPointByPosition } from '@utils/coordinatesPlane';

export type SlurDirection = 'over' | 'under';
interface Props extends TwoPointModel {
    place?: SlurDirection;
}

const width: number = 0;
const height: number = 20;

const curLength = 15;
const extLength = 2;

function JSX({ x1, y1, x2, y2, place = 'under' }: Props): JSX.Element {
    // finding C
    const CRe: TwoPointByPosition = findPerpendicularPointsBasedOnAB({ x: x1, y: y1 }, { x: x2, y: y2 }, 60);
    let C;
    if (place === 'under') {
        C = CRe.under;
    } else {
        C = CRe.above;
    }
    const foundAcur = findPointsOnAB({ x: x1, y: y1 }, C, 10);
    const curAx = foundAcur.between.x;
    const curAy = foundAcur.between.y;

    const foundBcur = findPointsOnAB({ x: x2, y: y2 }, C, 10);
    const curBx = foundBcur.between.x;
    const curBy = foundBcur.between.y;

    // find A1, B1
    const foundA1 = findPointsOnAB({ x: x1, y: y1 }, { x: x2, y: y2 }, extLength);
    const A1 = foundA1.outside;

    const foundB1 = findPointsOnAB({ x: x2, y: y2 }, { x: x1, y: y1 }, extLength);
    const B1 = foundB1.outside;

    // finding C1
    const C1Re: TwoPointByPosition = findPerpendicularPointsBasedOnAB(A1, B1, 60);
    let C1;
    if (place === 'under') {
        C1 = C1Re.under;
    } else {
        C1 = C1Re.above;
    }
    const foundA1cur = findPointsOnAB(A1, C1, curLength);
    const curA1x = foundA1cur.between.x;
    const curA1y = foundA1cur.between.y;

    const foundB1cur = findPointsOnAB(B1, C1, curLength);
    const curB1x = foundB1cur.between.x;
    const curB1y = foundB1cur.between.y;
    return (
        <path d={`M ${x1} ${y1} C ${curAx} ${curAy}, ${curBx} ${curBy}, ${x2} ${y2} L ${B1.x} ${B1.y} C ${curB1x} ${curB1y}, ${curA1x} ${curA1y}, ${A1.x} ${A1.y} Z`} strokeWidth={0.1} stroke='none' fill='black' />
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