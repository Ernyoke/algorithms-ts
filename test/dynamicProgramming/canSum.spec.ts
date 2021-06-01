import {expect} from "chai";

import canSum from "../../src/dynamicProgramming/canSum";

describe("#dynamicProgramming", function () {
    describe("canSum", function () {
        it("should check if the target sum can be constructed", function () {
            expect(canSum(7, [2, 3])).to.be.equal(true);
        });

        it("should check if the target sum can be constructed", function () {
            expect(canSum(7, [2, 4])).to.be.equal(false);
        });

        it("should check if the target sum can be constructed", function () {
            expect(canSum(300, [7, 14])).to.be.equal(false);
        });

        it("should check if the target sum can be constructed", function () {
            expect(canSum(300, [1, 7, 14])).to.be.equal(true);
        });
    });
});
