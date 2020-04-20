const sortByBinaryOnes = require('../../src/misc/sortByBinaryOnes');
const chai = require('chai');
const expect = chai.expect;

describe('#misc', function () {
    describe('#sortByBinaryOnes', function () {
        it('should sort array', function () {
            // binary: [1, 10, 11, 111, 1010, 1100, 10000, 10001]
            const values = [1, 2, 3, 7, 10, 12, 16, 17];
            const expected = [1, 2, 16, 3, 10, 12, 17, 7];
            sortByBinaryOnes(values);
            expect(values).to.have.ordered.members(expected);
        });
    });
});