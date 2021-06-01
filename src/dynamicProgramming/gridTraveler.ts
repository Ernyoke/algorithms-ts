/**
 * Given a 2D grid. The goal is to travel from the top-left of the grid to the bottom right of the grid.
 * Each time we can move to either right one position or either down one position. Movement in no other
 * direction is allowed.
 *
 * In how me ways we can travel an N * M grid?
 *
 * @param {number} n - vertical grid size
 * @param {number} m - horizontal grid size
 */
export default function gridTraveler(n: number, m: number): number {

    const travelRecursive = (n: number, m: number, memo: Map<string, number>): number => {
        const key = n + ' ' + m;
        if (memo.has(key)) {
            return <number>memo.get(key);
        }

        if (n == 1 && m == 1) {
            return 1;
        }

        if (n == 0 || m == 0) {
            return 0;
        }

        memo.set(key, travelRecursive(n - 1, m, memo) + travelRecursive(n, m - 1, memo));
        return <number>memo.get(key);
    };

    return travelRecursive(n, m, new Map());
}
