/**
 * Given an integer n return the minimum steps to minimize it to 1.
 * Available steps are:
 *  - decrement by 1
 *  - if n is divisible by 2, divide by 2
 *  - if n is divisible by 3, divide by 3
 *
 * @param n
 */
export default function minimizeToOne(n: number) {
    const minimizeRecursive = (n: number, memo: Map<number, number>): number => {
        if (memo.has(n)) {
            return <number>memo.get(n);
        }

        if (n == 1) {
            return 0;
        }

        let result = Number.MAX_VALUE;

        if (n % 2 == 0) {
            result =  Math.min(result, 1 + minimizeRecursive(n / 2, memo));
        }

        if (n % 3 == 0) {
            result = Math.min(result, 1 + minimizeRecursive(n / 3, memo));
        }

        result = Math.min(result, 1 + minimizeRecursive(n - 1, memo));
        memo.set(n, result);

        return result;
    }

    return minimizeRecursive(n, new Map());
}
