import {expect} from "chai"

import findIf from "../../src/search/findIf";

describe("#search", function () {
    describe("#findIf", function () {
        it("should return the position of the first element which satisfies the predicate", function () {
            const values = [1, 2, 3, 4, 5, 8, 10, 12];
            expect(findIf(values, (a: number) => a % 2 === 0)).to.be.equal(1);
        });

        it("should return the index of the last element plus 1 if no element satisfies the predicate", function () {
            const values = [1, 2, 3, 4, 5, 8, 10, 12];
            expect(findIf(values, (a: number) => a < 0)).to.be.equal(8);
        });
    });

});
