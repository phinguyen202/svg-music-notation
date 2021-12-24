export function quadraticEquationSolver(a, b, c) {
    const dental = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
    return {
        result1: (-1 * b + dental) / (2 * a),
        result2: (-1 * b - dental) / (2 * a)
    };
}
