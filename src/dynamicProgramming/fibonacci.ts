/**
 * Computes the n-th value in the fibonacci row (1, 1, 2, 3, 5, 8, etc.);
 * @param {number} n: input number
 */
export default function fibonacci(n: number): number {
    if (n < 0) {
        throw Error("Input should be greater than 0");
    }

    if (n <= 1) {
        return 1;
    }

    let f1 = 1;
    let f2 = 1;

    for (let i = 2; i <= n; i++) {
        const aux = f1 + f2;
        f1 = f2;
        f2 = aux;
    }

    return f2;

}
