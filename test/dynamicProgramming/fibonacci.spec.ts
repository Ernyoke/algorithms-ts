import {expect} from "chai";

import fibonacci from "../../src/dynamicProgramming/fibonacci";

describe("#dynamicProgramming", function () {
    describe("fibonacci", function () {
        it("should compute the 7th value from the fibonacci row", function () {
            // 1, 1, 2, 3, 5, 8, 13, 21
            expect(fibonacci(7)).to.be.equal(21);
        });

        it("should return 1 in case of 0th and 1st element from the fibonacci row", function () {
            expect(fibonacci(0)).to.be.equal(1);
            expect(fibonacci(1)).to.be.equal(1);
        });

        it("should trow in case of negative input", function () {
            expect(() => fibonacci(-1)).to.throw(Error, "Input should be greater than 0");
        });
    });
});
