/**
 * Returns the position of an element in the array. In case if the array, does not contain the element, the returned
 * index value is the position where the element would be placed.
 * @param {T[]} values
 * @param {T} elementToFind
 * @param {(a: T, b: T) => boolean} comparator: comparator functions which should compare two elements of type T and
 * should return true if a < b;
 */
export default function binarySearchRecursive<T>(values: T[], elementToFind: T,
                                                 comparator: (a: T, b: T) => boolean = (a: T, b: T) => a < b): number {

    const innerBinarySearch = (startIndex: number, endIndex: number): number => {
        if (startIndex < endIndex) {
            const index = Math.floor((startIndex + endIndex) / 2);
            if (comparator(values[index], elementToFind)) {
                return innerBinarySearch(index + 1, endIndex);
            } else {
                return innerBinarySearch(startIndex, index - 1);
            }
        }
        return startIndex;
    }

    return innerBinarySearch(0, values.length - 1);
};
