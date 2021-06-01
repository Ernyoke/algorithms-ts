import {expect} from "chai";

import canConstruct from "../../src/dynamicProgramming/canConstruct";

describe("#dynamicProgramming", function () {
    describe("canConstruct", function () {
        it("should check if the word can be constructed", function () {
            expect(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).to.be.equal(true);
        });

        it("should check if the word can be constructed", function () {
            expect(canConstruct("skateboard",
                ["bo", "rd", "ate", "t", "ska", "sk", "boar"])).to.be.equal(false);
        });

        it("should check if the word can be constructed", function () {
            expect(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef",
                ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])).to.be.equal(false);
        });
    });
});
