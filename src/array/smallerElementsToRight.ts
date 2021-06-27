import binarySearch from "../search/binarySearch";
import quickSort from "../sort/quickSort";
import reverse from "./reverse";

/**
 * Given an array of elements, return a new array where each element is the number of smaller elements to the right
 * of the element in the original input.
 *
 * Example:
 * [3, 4, 9, 6, 1] -> [1, 1, 2, 1, 0]
 * 3 -> there is one smaller element to the right, which is 1
 * 4 -> there is one smaller element to the right, which is 1
 * 9 -> there are two smaller elements to the right: 6, 1
 * ...
 * @param {T[]} elements
 * @param {(a:T, b:T) -> boolean} comparator
 */
export default function findSmallerElementsToRight<T>(elements:T[], comparator: (a: T, b: T) => boolean): number[] {
    const result: number[] = [];
    const seen: T[] = [];

    if (!elements) {
        return result;
    }

    for (let i = elements.length - 1; i >= 0; i--) {
        const position = binarySearch(seen, elements[i], 0, elements.length - 1, comparator);
        result.push(position);
        seen.push(elements[i]);
        quickSort(seen);
    }

    reverse(result);
    return result;
}
