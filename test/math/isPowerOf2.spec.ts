import { expect } from "chai"

import isPowerOf2 from "../../src/math/isPowerOf2";

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