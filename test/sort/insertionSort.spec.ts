import { expect } from "chai"

import insertionSort from "../../src/sort/insertionSort";

describe("#sorting", function () {
    describe("#insertionSort", function () {
        it("should sort elements", function () {
            const values = [6, 3, 2, 4, 10, 12, 11, 1, 2];
            insertionSort(values);
            expect(values).to.have.ordered.members([1, 2, 2, 3, 4, 6, 10, 11, 12]);
        });

        it("should sort elements of an array of 2 elements", function () {
            const values = [2, 1];
            insertionSort(values);
            expect(values).to.have.ordered.members([1, 2]);
        });

        it("should not get errors for array of 1 element", function () {
            const values = [1];
            insertionSort(values);
            expect(values).to.have.ordered.members([1]);
        });

        it("should not get errors for an empty array", function () {
            const values: number[] = [];
            insertionSort(values);
            expect(values).to.be.empty;
        });

        it("should sort using a custom comparator", function () {
            const values = [2, 1, 3, 6, 5, 9, 8, 7];
            insertionSort(values, (a, b) => b < a);
            expect(values).to.have.ordered.members([9, 8, 7, 6, 5, 3, 2, 1])
        })
    });


});
