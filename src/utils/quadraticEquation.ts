// Quadratic Equation Solver
export interface QuadraticEquationResult {
    result1: number;
    result2: number;
}

export function quadraticEquationSolver(a: number, b: number, c: number): QuadraticEquationResult {
    const dental = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
    return <QuadraticEquationResult>{
        result1: (-1 * b + dental) / (2 * a),
        result2: (-1 * b - dental) / (2 * a)
    }
}
