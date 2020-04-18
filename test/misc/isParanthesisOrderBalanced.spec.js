const isParanthesisOrderBalanced = require('../../src/misc/isParanthesisOrderBalanced');
const chai = require('chai');
const expect = chai.expect;

describe('#misc', function () {
    describe('#isParanthesisOrderBalanced', function () {
        it('should return true in cased of balanced input', function () {
            expect(isParanthesisOrderBalanced('(())()((()))()')).to.be.true;
        });

        it('should return false in case the on unbalanced input', function () {
            expect(isParanthesisOrderBalanced('(())()((())()')).to.be.false;
        });

        it('should return true in case of empty string', function () {
            expect(isParanthesisOrderBalanced('')).to.be.true;
        });
    });
});