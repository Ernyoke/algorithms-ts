const Stack = require('../../stack/stack');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const expect = chai.expect;

describe('#Stack', function () {
    describe('#Stack', function () {
        it('it should return the number of elements is the stack', function () {
            const s = new Stack();
            s.push(1, 2, 3);
            expect(s.length).to.be.equal(3);
        });

        it('it should pop the elements in the revers orders they were added', function () {
            const s = new Stack();
            s.push(1, 2, 3);
            s.push(4);

            const elements = [];
            while(s.length > 0) {
                elements.push(s.pop());
            }

            expect(elements).to.have.ordered.members([4, 3, 2, 1]);
        });

    });
});