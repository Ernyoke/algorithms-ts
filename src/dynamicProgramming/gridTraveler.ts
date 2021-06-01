/**
 * Given a 2D grid. The goal is to travel from the top-left of the grid to the bottom right of the grid.
 * Each time we can move to either right one position or either down one position. Movement in no other
 * direction is allowed.
 *
 * In how me ways we can travel an N * M grid?
 */
export default function gridTraveler(n: number, m: number): number {

    const travelRecursive = (n: number, m: number, memo: any):number => {
        const key = n + ' ' + m;
        if (!!memo[key]) {
            return memo[key];
        }

        if (n == 1 && m == 1) {
            return 1;
        }

        if (n == 0 || m == 0) {
            return 0;
        }

        memo[key] = travelRecursive(n - 1, m, memo) + travelRecursive(n, m - 1, memo);
        return memo[key];
    };

    return travelRecursive(n, m, {});
}
