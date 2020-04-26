/**
 * Returns the position of an element in the array. In case if the array, does not contain the element, the returned
 * index value is the position where the element would be placed.
 * @param {T[]} values - input array
 * @param {T} elementToFind - element to be found
 * @param first - first index
 * @param last - last index
 * @param {(a: T, b: T) => boolean} comparator: comparator functions which should compare two elements of type T and
 * should return true if a < b;
 */
export default function binarySearch<T>(values: T[],
                                        elementToFind: T,
                                        first: number = 0,
                                        last: number = values.length - 1,
                                        comparator: (a: T, b: T) => boolean = (a: T, b:T) => a < b) {
    while (first < last) {
        const mid = first + Math.floor((last - first) / 2);
        if (comparator(values[mid], elementToFind)) {
            first = mid + 1;
        } else {
            last = mid;
        }
    }
    return first;
}
