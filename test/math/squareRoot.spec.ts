import { expect } from "chai"

import sqrt from "../../src/math/squareRoot";

describe("#math", function() {
    describe("#squareRoot", function() {
        const eps = 0.000001;
        it ("should calculate the square root of 25", function() {
            expect(sqrt(25)).to.be.approximately(5, eps);
        });

        it ("should calculate the square of 2", function() {
            expect(sqrt(2)).to.be.approximately(1.414213562, eps);
        })

        it ("should calculated the square of 0", function() {
            expect(sqrt(0)).to.be.equal(0);
        });
    });
});