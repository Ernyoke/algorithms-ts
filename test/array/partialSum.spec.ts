import {expect} from "chai";

import partialSum from "../../src/array/partialSum";

describe("#array", function () {
    describe("partialSum", function () {
        it("it should compute the partial sum of the elements of the array", function () {
            const values = [1, 2, 3, 4, 5, 6];
            const sum = (a: number, b: number) => a + b;
            partialSum(values, sum);
            expect(values).to.have.ordered.members([1, 3, 6, 10, 15, 21]);
        });

        it("it should compute the partial sum of an array of single element", function () {
            const values = [1];
            const sum = (a: number, b: number) => a + b;
            partialSum(values, sum);
            expect(values).to.have.ordered.members([1]);
        });
    });
});
