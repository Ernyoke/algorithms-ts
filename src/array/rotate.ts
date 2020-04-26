import reverse from "./reverse";
import {validateBounds} from "./utils";

/**
 * Does a left rotation on an array/subarray in a way that the element specified by the expectedFirst will be
 * at the position specified by the first index.
 * @param {T[]} values - input array
 * @param {number} expectedFirst - index for the value which should be on top
 * @param {number} first - first index
 * @param {number} last - last index
 */
export default function rotate<T>(values: T[],
                                  expectedFirst: number,
                                  first: number = 0,
                                  last: number = values.length - 1) {

    validateBounds(first, last, values.length);

    if (expectedFirst < first || expectedFirst > last) {
        throw new Error("Expected first index should be between first and last!");
    }

    if (expectedFirst == first) {
        return;
    }

    reverse(values, first, expectedFirst - 1);
    reverse(values, expectedFirst, last);
    reverse(values, first, last);
}
