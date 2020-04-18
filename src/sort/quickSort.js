/**
 * In plage Quick-sort algorithm 
 * @param {array} values 
 * @param {function(value1, value2) => boolean} comparator 
 */
const quickSort = (values, comparator) => {
    const comp =  comparator ? comparator : (a, b) => a < b;

    const swap = (index1, index2) => {
        const aux = values[index1];
        values[index1] = values[index2];
        values[index2] = aux;
    }

    const partition = (startPosition, endPosition) => {
        const pivot = values[endPosition];
        let partitionPosition = startPosition;
        for (let i = startPosition; i < endPosition; i++) {
            if (comp(values[i], pivot)) {
                swap(i, partitionPosition);
                partitionPosition++;
            }
        }
        swap(endPosition, partitionPosition);
        return partitionPosition;
    };

    const quickSortRecoursive = (startPosition, endPosition) => {
        if (startPosition < endPosition) {
            const pivot = partition(startPosition, endPosition);
            quickSortRecoursive(startPosition, pivot - 1);
            quickSortRecoursive(pivot + 1, endPosition);
        }
    };

    quickSortRecoursive(0, values.length - 1);

};

module.exports = quickSort;

