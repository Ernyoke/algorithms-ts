/**
 * Search an element inside of a sorted array.
 * @param values: a sorted array
 * @param elementToFind: an element which is expected to be found in the array
 * @param comparator: a function which expects two elements as arguments and returns -1, 0, 1. 
 *      -1: if the first argument is lesser than the second
 *       0: if the arguments are equal
 *       1: if the second argument is greater then the first
 * @returns the position of the elementTo Find if it is found, otherwise undefined
 */
const binarySearch = (values, elementToFind, comparator) => {
    const comp = comparator ? comparator : (a, b) => a === b ? 0 : a < b ? -1 : 1;

    const binarySearchRecoursive = (startIndex, endIndex) => {
        if (startIndex < endIndex) {
            const index = Math.floor((startIndex + endIndex) / 2);
            switch (comp(values[index], elementToFind)) {
                case 0:
                    return index;
                case 1:
                    return binarySearchRecoursive(startIndex, index - 1);
                case -1:
                    return binarySearchRecoursive(index + 1, endIndex);
            }
        } else {
            if (startIndex == endIndex && comp(values[startIndex], elementToFind) === 0) {
                return startIndex;
            }
        }
    }

    return binarySearchRecoursive(0, values.length - 1);

};

module.exports = binarySearch;