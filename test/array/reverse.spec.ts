import {expect} from "chai";

import reverse from "../../src/array/reverse";

describe("#array", function () {
    describe("reverse", function () {
        it("should reverse an array", function () {
            const values = [1, 2, 3, 4, 5, 6];
            reverse(values);
            expect(values).to.have.ordered.members([6, 5, 4, 3, 2, 1]);
        });

        it("should reverse a subarray", function () {
            const values = [1, 2, 3, 4, 5, 6, 7];
            reverse(values, 1, 4);
            expect(values).to.have.ordered.members([1, 5, 4, 3, 2, 6, 7]);
        });

        it("should reverse an array of 3 values", function () {
            const values = [1, 2, 3];
            reverse(values);
            expect(values).to.have.ordered.members([3, 2, 1]);
        });

        it("should reverse an array of 2 values", function () {
            const values = [1, 2];
            reverse(values);
            expect(values).to.have.ordered.members([2, 1]);
        });

        it("should throw an error in case of out of bounds indices", function () {
            const values = [1];
            expect(() => {
                reverse(values, -1, 2)
            }).to.throw(Error, "Index out of bounds!");
        });
    });
});
