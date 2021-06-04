import {expect} from "chai";

import climbingStairs from "../../src/dynamicProgramming/climbingStairs";

describe("#dynamicProgramming", function () {
    describe("climbingStairs", function () {
        it("should compute the number of ways for climbing 7 stairs", function () {
            expect(climbingStairs(7)).to.be.equal(21);
        });
    });
});
