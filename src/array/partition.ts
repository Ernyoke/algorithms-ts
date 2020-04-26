import {swap, validateBounds} from "./utils";
import findIf from "../search/findIf";

/**
 * Partitions the array/subarray in a way that all the elements which adhere to the predicate will precede the elements
 * for which the predicate returns false.
 * @param {T[]} values - input array
 * @param {(a: T) => boolean} predicate
 * @param {number} first - first index
 * @param {number} last - last index
 */
export default function partition<T>(values: T[],
                                     predicate: (a: T) => boolean,
                                     first: number = 0,
                                     last: number = values.length - 1): number {

    validateBounds(first, last, values.length);

    first = findIf(values, (a: T) => !predicate(a), first, last);

    if (first == last) {
        return first;
    }

    for (let i = first + 1; i <= last; i++) {
        if (predicate(values[i])) {
            swap(values, first++, i);
        }
    }

    return first;
}
