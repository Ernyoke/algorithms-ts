/**
 * Reverses the elements of a sub-array.
 * @param {T[]} values: array of T type
 * @param {number} first: first index
 * @param {number} last: last index
 */
export default function reverse<T>(values: T[], first: number = 0, last: number = values.length - 1): void {
    if (first > last) {
        throw new Error("Invalid indices! First should less or equal than last!");
    }

    if (first < 0 || last >= values.length) {
        throw new Error("Index out of bounds!");
    }

    const swap = (index1: number, index2: number) => {
        const aux = values[index1];
        values[index1] = values[index2];
        values[index2] = aux;
    };

    const mid = Math.floor(first + (last - first) / 2);
    let lastIndex = last;
    for (let i = first; i <= mid; i++) {
        swap(i, lastIndex--);
    }
}
