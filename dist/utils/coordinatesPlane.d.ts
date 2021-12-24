import { Position } from '@model/common.model';
export interface TwoPointBaseLine {
    outside: Position;
    between: Position;
}
export interface TwoPointByPosition {
    above: Position;
    under: Position;
}
export interface DxModel {
    a: number;
    b: number;
}
export declare type Relative2Lines = 'Coincident' | 'Parallel' | 'Secant';
export interface Relative2LinesResult {
    result: Relative2Lines;
    intersectingPoint?: Position;
}
export declare function dx(A: Position, B: Position): DxModel;
export declare function intersectingPointOf2Dxs(dx1: DxModel, dx2: DxModel): Relative2LinesResult;
/**
 * @description finding 2 point (C) that ^BAC = degrees
 * @author Phi Nguyen
 * @export
 * @param {Position} A
 * @param {Position} B
 * @param {number} degrees
 * @returns {TwoPointByPosition}
 */
export declare function findPerpendicularPointsBasedOnAB(A: Position, B: Position, degrees: number): TwoPointByPosition;
/**
 * @description finding 2 point (C() which is on dAB and distance of dAC = d
 * @author Phi Nguyen
 * @export
 * @param {Position} A
 * @param {Position} B
 * @param {number} d
 * @returns {TwoPointBaseLine}
 */
export declare function findPointsOnAB(A: Position, B: Position, d: number): TwoPointBaseLine;
/**
 * @description calcular distance between A and B
 * @author Phi Nguyen
 * @export
 * @param {Position} A
 * @param {Position} B
 * @returns {number}
 */
export declare function calculatedAB(A: Position, B: Position): number;
