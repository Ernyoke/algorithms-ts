import {expect} from "chai";

import gridTraveler from "../../src/dynamicProgramming/gridTraveler";

describe("#dynamicProgramming", function () {
    describe("gridTraveler", function () {
        it("should compute the number of ways for 1, 1 grid", function () {
            expect(gridTraveler(1, 1)).to.be.equal(1);
        });

        it("should compute the number of ways for 2, 3 grid", function () {
            expect(gridTraveler(2, 3)).to.be.equal(3);
        });

        it("should compute the number of ways for 3, 2 grid", function () {
            expect(gridTraveler(3, 2)).to.be.equal(3);
        });

        it("should compute the number of ways for 3, 3 grid", function () {
            expect(gridTraveler(3, 3)).to.be.equal(6);
        });

        it("should compute the number of ways for 18, 18 grid", function () {
            expect(gridTraveler(18, 18)).to.be.equal(2333606220);
        });
    });
});
