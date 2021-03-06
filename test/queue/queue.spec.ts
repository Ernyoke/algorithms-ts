import { expect } from "chai"

import Queue from "../../src/queue/queue";

describe("#queue", function () {
    describe("#queue", function () {
        let q: Queue<number>;
        beforeEach(function () {
            q = new Queue();
            q.enqueue(3);
            q.enqueue(1);
            q.enqueue(2);
            q.enqueue(5);
            q.enqueue(1);
            q.enqueue(6);
        });

        it ("should peek the first element", function() {
            expect(q.peek()).to.be.equal(3);
        });

        it ("should return and remove the first element", function() {
            const elements: number[] = [];
            while(q.length > 0) {
                elements.push(q.dequeue());
            }

            expect(elements).to.have.ordered.members([3, 1, 2, 5, 1, 6]);
        });
    });
})