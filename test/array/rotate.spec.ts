import {expect} from "chai";

import rotate from "../../src/array/rotate";

describe("#array", function () {
    describe("rotate", function () {
        it("should rotate an array", function () {
            const values = [1, 2, 3, 4, 5, 6];
            rotate(values, 2);
            expect(values).to.have.ordered.members([3, 4, 5, 6, 1, 2]);
        });

        it ("should rotate a subarray", function () {
            const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            rotate(values, 2, 0, 5);
            expect(values).to.have.ordered.members([3, 4, 5, 6, 1, 2, 7, 8, 9]);
        });
    });
});
