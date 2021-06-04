/**
 * There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2
 * stairs at a time. Count the number of ways, the person can reach the top.
 *
 * (Essentially this is athe fibonacci problem.)
 *
 * @param n - number of stairs
 */
export default function climbingStairs(n: number): number {
    const climbingStairsRecursive = (n: number, memo: Map<number, number>): number => {
        if (memo.has(n)) {
            return <number>memo.get(n);
        }
        if (n == 0 || n == 1) {
            return 1;
        }
        const result = climbingStairsRecursive(n - 1, memo) + climbingStairsRecursive(n - 2, memo);
        memo.set(n, result);
        return result;
    };

    return climbingStairsRecursive(n, new Map());
}
