import { expect } from "chai"

import isParanthesisOrderBalanced from "../../src/misc/isParanthesisOrderBalanced";

describe("#misc", function () {
    describe("#isParanthesisOrderBalanced", function () {
        it("should return true in cased of balanced input", function () {
            expect(isParanthesisOrderBalanced("(())()((()))()")).to.be.true;
        });

        it("should return false in case the on unbalanced input", function () {
            expect(isParanthesisOrderBalanced("(())()((())()")).to.be.false;
        });

        it("should return true in case of empty string", function () {
            expect(isParanthesisOrderBalanced("")).to.be.true;
        });
    });
});