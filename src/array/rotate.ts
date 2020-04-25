import reverse from "./reverse";

export default function rotate<T>(values: T[],
                                  expectedFirst: number,
                                  first: number = 0,
                                  last: number = values.length - 1) {
    if (first > last) {
        throw new Error("Invalid indices! First should less or equal than last!");
    }

    if (first < 0 || last >= values.length) {
        throw new Error("Index out of bounds!");
    }

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
