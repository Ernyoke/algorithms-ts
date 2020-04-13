const isPowerOf2 = require('../../src/math/isPowerOf2');

const chai = require('chai');
const expect = chai.expect;

describe('#math', function() {
    describe('#isPowerOf2', function() {
        it ('should return true in case of 128', function() {
            expect(isPowerOf2(128)).to.be.true;
        });

        it ('should return false in case of 73', function() {
            expect(isPowerOf2(73)).to.be.false;
        })

        it ('should return false in case of 34', function() {
            expect(isPowerOf2(34)).to.be.false;
        });
    });
});