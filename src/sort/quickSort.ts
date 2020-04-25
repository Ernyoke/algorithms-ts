/**
 * In place Quick-sort algorithm
 * @param {T[]} values: array to be sorted
 * @param {(a:T, b:T) => boolean } comparator: function which takes to elements of T and returns true if a < b
 */
export default function quickSort<T>(values: T[], comparator: (a: T, b: T) => boolean = (a: T, b: T) => a < b) {

    const swap = (index1: number, index2: number) => {
        const aux = values[index1];
        values[index1] = values[index2];
        values[index2] = aux;
    }

    const partition = (startPosition: number, endPosition: number): number => {
        const pivot = values[endPosition];
        let partitionPosition = startPosition;
        for (let i = startPosition; i < endPosition; i++) {
            if (comparator(values[i], pivot)) {
                swap(i, partitionPosition);
                partitionPosition++;
            }
        }
        swap(endPosition, partitionPosition);
        return partitionPosition;
    };

    const quickSortRecoursive = (startPosition: number, endPosition: number) => {
        if (startPosition < endPosition) {
            const pivot = partition(startPosition, endPosition);
            quickSortRecoursive(startPosition, pivot - 1);
            quickSortRecoursive(pivot + 1, endPosition);
        }
    };

    quickSortRecoursive(0, values.length - 1);

};
