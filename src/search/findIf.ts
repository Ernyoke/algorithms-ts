import {validateBounds} from "../array/utils";

/**
 * Returns the position of the first element which satisfies the predicate.
 * @param {T[]} values - input array
 * @param {(a: T) => boolean} predicate
 * @param {number} first
 * @param {number} last
 */
export default function findIf<T>(values: T[], predicate: (a: T) => boolean, first: number = 0, last: number = values.length - 1): number {
    validateBounds(first, last, values.length)
    for (let i = first; i <= last; i++) {
        if (predicate(values[i])) {
            return i;
        }
    }
    return values.length;
}
