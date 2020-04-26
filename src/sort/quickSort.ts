/**
 * In place Quick-sort algorithm
 * @param {T[]} values: array to be sorted
 * @param {(a:T, b:T) => boolean } comparator: function which takes to elements of T and returns true if a < b
 */
import partition from "../array/partition";

export default function quickSort<T>(values: T[], comparator: (a: T, b: T) => boolean = (a: T, b: T) => a < b) {
    const quickSortRecursive = (startPosition: number, endPosition: number) => {
        if (startPosition < endPosition) {
            const pivot = values[startPosition + Math.floor((endPosition - startPosition) / 2)];
            const lowerPartitionPosition = partition(values, (a: T) => comparator(a, pivot), startPosition, endPosition);
            const upperPartitionPosition = partition(values, (a) => !comparator(pivot, a), lowerPartitionPosition, endPosition);
            quickSortRecursive(startPosition, lowerPartitionPosition - 1);
            quickSortRecursive(upperPartitionPosition, endPosition);
        }
    };

    quickSortRecursive(0, values.length - 1);

};
