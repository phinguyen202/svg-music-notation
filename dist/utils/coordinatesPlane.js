import TrigonometryMath from "./math";
import { quadraticEquationSolver } from './quadraticEquation';
export function dx(A, B) {
    // called AB: y = ax + b
    // yA = axA + b
    const a = !(B.y - A.y) || !(B.x - A.x) ? 0 : (B.y - A.y) / (B.x - A.x);
    const b = A.y - (a * A.x);
    return { a, b };
}
export function intersectingPointOf2Dxs(dx1, dx2) {
    // Coincident if a1 === a2 && b1 === b2
    // Parallel if a1 === a2 && b1 !== b2
    if (dx1.a === dx2.a) {
        if (dx1.b === dx2.b) {
            return {
                result: 'Coincident'
            };
        }
        else {
            return {
                result: 'Parallel'
            };
        }
    }
    else {
        // Secants a1 !== a2
        // dx1: y = a1x + b1
        // dx2: y = a2x + b2
        // => 0 = (a1-a2)x + (b1 -b2)
        // => x = (b2 - b1)/(a1-a2)
        const x = (dx2.b - dx1.b) / (dx1.a - dx2.a);
        return {
            result: 'Secant',
            intersectingPoint: {
                x,
                y: x * dx1.a + dx1.b
            }
        };
    }
}
/**
 * @description finding 2 point (C) that ^BAC = degrees
 * @author Phi Nguyen
 * @export
 * @param {Position} A
 * @param {Position} B
 * @param {number} degrees
 * @returns {TwoPointByPosition}
 */
export function findPerpendicularPointsBasedOnAB(A, B, degrees) {
    // called AB: y = ax + b
    // yA = axA + b
    // yB = axB + b
    // yA - yB = a(xA - xB)
    const { a, b } = dx(A, B);
    // call H is "center" of AB
    const xH = (A.x + B.x) / 2;
    const yH = (A.y + B.y) / 2;
    // called CH ⊥ AB
    // => CH: y = a1x + b1 => a*a1 = -1 => a1 = -1/a
    const a1 = -1 / a;
    const b1 = yH - a1 * xH;
    const dAH = Math.sqrt(Math.pow((A.x - xH), 2) + Math.pow((A.y - yH), 2));
    const dHC = dAH * TrigonometryMath.tan(degrees);
    // called c: xC, yC is needed position 
    // (xC - xH)^2 + (yC - yH)^2 = dHC^2
    // PTB2 a1 * B.x + b1 * x + c = 0
    // => a = 1 + a1^2
    // => b = -2xH + 2a1b1 -2a1yH = -2(xH -a1b1 + ayH);
    // => c = -(dHC^2) + xH^2 + yH^2 + b1^2 - 2b1yH
    const re = quadraticEquationSolver(1 + Math.pow(a1, 2), -2 * (xH - a1 * b1 + a1 * yH), -(Math.pow(dHC, 2)) + Math.pow(xH, 2) + Math.pow(yH, 2) + Math.pow(b1, 2) - 2 * b1 * yH);
    const c1 = {
        x: re.result1,
        y: a1 * re.result1 + b1
    };
    const c2 = {
        x: re.result2,
        y: a1 * re.result2 + b1
    };
    if (c1.y >= c2.y) {
        return {
            above: c2,
            under: c1,
        };
    }
    else {
        return {
            above: c1,
            under: c2,
        };
    }
}
/**
 * @description finding 2 point (C() which is on dAB and distance of dAC = d
 * @author Phi Nguyen
 * @export
 * @param {Position} A
 * @param {Position} B
 * @param {number} d
 * @returns {TwoPointBaseLine}
 */
export function findPointsOnAB(A, B, d) {
    // dAB
    const a = (B.y - A.y) / (B.x - A.x);
    const b = A.y - a * A.x;
    // call C (xC, yC) on AB and dAC= d
    // => yC = a*xC + b
    // => (xC - xA)^2 + (yC - yA)^2 = d^2
    // => a = 1 + a^2
    // => b = -2xA + 2ab -2ayA = -2(xA -ab + ayA);
    // => c = -(d^2) + xA^2 + yA^2 + b^2 - 2byA
    const re = quadraticEquationSolver(1 + Math.pow(a, 2), -2 * (A.x - a * b + a * A.y), -(Math.pow(d, 2)) + Math.pow(A.x, 2) + Math.pow(A.y, 2) + Math.pow(b, 2) - 2 * b * A.y);
    const c1 = {
        x: re.result1,
        y: a * re.result1 + b
    };
    const c2 = {
        x: re.result2,
        y: a * re.result2 + b
    };
    if (calculatedAB(B, c1) < calculatedAB(B, c2)) {
        return {
            between: c1,
            outside: c2,
        };
    }
    else {
        return {
            between: c2,
            outside: c1,
        };
    }
}
/**
 * @description calcular distance between A and B
 * @author Phi Nguyen
 * @export
 * @param {Position} A
 * @param {Position} B
 * @returns {number}
 */
export function calculatedAB(A, B) {
    return Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2));
}
