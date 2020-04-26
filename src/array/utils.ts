/**
 * Utility function to validate the input boundaries.
 * @param {number} first - first index
 * @param {number} last - last index
 * @param {number} length - length of the array
 */
function validateBounds(first: number, last: number, length: number) {
    if (first > last) {
        throw new Error("Invalid indices! First should less or equal than last!");
    }

    if (first < 0 || last >= length) {
        throw new Error("Index out of bounds!");
    }
}

/**
 * Swaps the elements of the array specified by index1 and index2.
 * Note: this function does not do any error check for the input indexes.
 * @param {T[]} values - input array
 * @param {number} index1
 * @param {number} index2
 */
function swap<T>(values: T[], index1: number, index2: number) {
    const aux = values[index1];
    values[index1] = values[index2];
    values[index2] = aux;
}

export {
    validateBounds,
    swap
};

