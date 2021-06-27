import {expect} from "chai";

import findSmallerElementsToRight from "../../src/array/smallerElementsToRight";

describe("#array", function () {
    describe("smallerElementsToRight", function () {
        it("it should return the number of smaller elements to the right", function () {
            const elements = [3, 4, 9, 6, 1];
            const result = findSmallerElementsToRight(elements, (a: number, b: number) => a < b);
            expect(result).to.have.ordered.members([1, 1, 2, 1, 0]);
        });

        it("it should return the number of smaller elements to the right", function () {
            const elements = [1, 2, 3, 2, 1, 0];
            const result = findSmallerElementsToRight(elements, (a: number, b: number) => a < b);
            expect(result).to.have.ordered.members([1, 2, 3, 2, 1, 0]);
        });
    });
});
