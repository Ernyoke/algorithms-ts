import binarySearch from "../search/binarySearch";
import rotate from "../array/rotate";

/**
 * Insertion sort algorithm.
 * @param {T[]} values: array to be sorted
 * @param {(a:T, b:T) => boolean } comparator: function which takes to elements of T and returns true if a < b
 */
export default function insertionSort<T>(values: T[], comparator: (a: T, b: T) => boolean = (a: T, b: T) => a < b) {
    for (let i = 0; i < values.length; i++) {
        const insertionPosition = binarySearch(values, values[i], 0, i, comparator);
        rotate(values, i, insertionPosition, i);
    }
}
