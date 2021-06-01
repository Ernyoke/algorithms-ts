/**
 * Checks if the target sum can be achieved by summing values from the numbers array.
 *
 * @param targetSum
 * @param numbers
 */
export default function canSum(targetSum: number, numbers: number[]): boolean {

    const canSumRecursive = (targetSum: number, numbers: number[], memo: Map<number, boolean>): boolean => {
        if (memo.has(targetSum)) {
            return <boolean>memo.get(targetSum);
        }

        if (targetSum == 0) {
            return true;
        }

        if (targetSum < 0) {
            return false;
        }

        for (let value of numbers) {
            if (canSumRecursive(targetSum - value, numbers, memo)) {
                memo.set(targetSum, true)
                return true;
            }
        }

        memo.set(targetSum, false)
        return false;
    }

    return canSumRecursive(targetSum, numbers, new Map());
}
