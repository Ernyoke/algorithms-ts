import {validateBounds, swap} from "./utils";

/**
 * Reverses the elements of a sub-array.
 * @param {T[]} values- array of T type
 * @param {number} first - first index
 * @param {number} last - last index
 */
export default function reverse<T>(values: T[], first: number = 0, last: number = values.length - 1): void {
    validateBounds(first, last, values.length);

    const mid = Math.floor(first + (last - first) / 2);
    let lastIndex = last;
    for (let i = first; i <= mid; i++) {
        swap(values, i, lastIndex--);
    }
}
