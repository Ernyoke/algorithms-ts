/**
 * Newton-Raphson method
 * 
 * x[n + 1] = x[n] - f(x) / f'(x)
 *   
 * For finding square root of S we can use f(x) = x^2 - S
 * so, x[n + 1] = x[n] - (x^2 - S) / 2x
 * 
 */

const squareRoot = (number, eps = 0.000001) => {
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

module.exports = squareRoot;