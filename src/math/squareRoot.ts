/**
 * Newton-Raphson method
 * 
 * x[n + 1] = x[n] - f(x) / f'(x)
 *   
 * For finding square root of S we can use f(x) = x^2 - S
 * so, x[n + 1] = x[n] - (x^2 - S) / 2x
 * 
 * 
 * @param {number} number - positive numeric value for which the square root is computed. 
 * @param {number} eps - precision factor 
 */
export default function squareRoot(number: number, eps = 0.000001): number {
    if (number < 0) {
        throw new Error('Can not get the square root of a negative!');
    }

    if (number === 0) {
        return 0;
    }

    let x = 1;

    while (Math.abs(x * x - number) > eps) {
        x = x - (x * x - number) / (2 * x);
    }

    return x;
};