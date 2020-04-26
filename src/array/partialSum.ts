import {validateBounds} from "./utils";

/**
 * Compute the partial sum of the elements in range of fist and last indices.
 * Example:
 * values[first] = values[first];
 * values[first + 1] = sum(values[first], values[first + 1]);
 * values[first + 2] = sum(values[first + 1], values[first + 2]);
 * ...
 * @param {T[]} values - input array
 * @param {(a: T, b: T) => T} sum - function which should take two arguments of type T and return a result of type T
 * @param first - fist index
 * @param last - last index
 */
export default function partialSum<T>(values: T[], sum: (a: T, b: T) => T, first: number = 0, last: number = values.length - 1) {
    validateBounds(first, last, values.length);
    for (let i = first + 1; i <= last; i++) {
        values[i] = sum(values[i], values[i - 1]);
    }
}
