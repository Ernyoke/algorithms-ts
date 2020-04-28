import { expect } from "chai"

import isParenthesisOrderBalanced from "../../src/misc/isParenthesisOrderBalanced";

describe("#misc", function () {
    describe("#isParanthesisOrderBalanced", function () {
        it("should return true in cased of balanced input", function () {
            expect(isParenthesisOrderBalanced("(())()((()))()")).to.be.true;
        });

        it("should return false in case the on unbalanced input", function () {
            expect(isParenthesisOrderBalanced("(())()((())()")).to.be.false;
        });

        it("should return true in case of empty string", function () {
            expect(isParenthesisOrderBalanced("")).to.be.true;
        });
    });
});
