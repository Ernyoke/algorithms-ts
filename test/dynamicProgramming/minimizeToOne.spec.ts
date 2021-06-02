import {expect} from "chai";

import minimizeToOne from "../../src/dynamicProgramming/minimizeToOne";

describe("#dynamicProgramming", function () {
    describe("minimizeToOne", function () {
        it("should minimize 10 to 1", function () {
            expect(minimizeToOne(10)).to.be.equal(3);
        });

        it("should minimize 15 to 1", function () {
            expect(minimizeToOne(15)).to.be.equal(4);
        });

        it("should minimize 100 to 1", function () {
            expect(minimizeToOne(100)).to.be.equal(7);
        });
    });
});
