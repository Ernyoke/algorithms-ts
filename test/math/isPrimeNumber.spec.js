const isPrime = require('../../src/math/isPrimeNumber');

const chai = require('chai');
const expect = chai.expect;

describe('#math', function () {
    describe('#isPrime', function () {
        it('should return true in case of 2', function () {
            expect(isPrime(2)).to.be.true;
        });

        it('should return false in case of 25', function () {
            expect(isPrime(25)).to.be.false;
        })

        it('should return true in case of 97', function () {
            expect(isPrime(97)).to.be.true;
        });

        it('it should return false in case of a negative', function () {
            expect(isPrime(-34)).to.be.false;
        });
    });
});