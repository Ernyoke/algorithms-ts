import {expect} from "chai";

import partition from "../../src/array/partition";

describe("#array", function () {
    describe("partition", function () {
        it("it should partition an array", function () {
            const values = [1, 2, 3, 4, 5, 6];
            const predicate = (a: number) => a % 2 === 0;
            const partitionIndex = partition(values, predicate);
            expect(partitionIndex).to.be.equal(3);
            expect(values.map(v => predicate(v))).to.have.ordered.members([true, true, true, false, false, false]);
        });

        it("it should partition an array of 2 values", function () {
            const values = [1, 2];
            const predicate = (a: number) => a % 2 === 0;
            const partitionIndex = partition(values, predicate);
            expect(partitionIndex).to.be.equal(1);
            expect(values.map(v => predicate(v))).to.have.ordered.members([true, false]);
        });
    });
});
