import { expect } from "chai"

import binarySearch from "../../src/search/binarySearch";

describe('#search', function () {
    describe('#binarySearch', function () {
        it('should find the element', function () {
            const values = [1, 2, 3, 4, 5, 8, 10, 12];
            expect(binarySearch(values, 10)).to.be.equal(6);
        });

        it('should find the first element in the array', function () {
            const values = [1, 2, 3, 4, 5, 8, 10, 12];
            expect(binarySearch(values, 1)).to.be.equal(0);
        });

        it('should find the last element in the array', function () {
            const values = [1, 2, 3, 4, 5, 8, 10, 12];
            expect(binarySearch(values, 12)).to.be.equal(7);
        });

        it('should not find element', function () {
            const values = [1, 2, 3, 4, 5, 8, 10, 12];
            expect(binarySearch(values, 13)).to.not.exist;
        });

        it('should not find element in empty array', function () {
            const values: number[] = [];
            expect(binarySearch(values, 13)).to.not.exist;
        })
    });


});