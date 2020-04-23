import { expect } from "chai"

import Heap from "../../src/heap/heap";

describe('#heap', function () {
    describe('#heap', function () {
        it('should create a heap from the elements using default comparator', function () {
            const heap = new Heap<number>();
            heap.push(1);
            heap.push(8);
            heap.push(7);
            heap.push(9);
            heap.push(3);
            heap.push(5);

            expect(heap.traverse()).to.have.ordered.members([1, 3, 5, 9, 8, 7]);
        });

        it('should create a heap from the elements using custom comparator', function () {
            const heap = new Heap((a, b) => b < a);
            heap.push(1);
            heap.push(8);
            heap.push(7);
            heap.push(9);
            heap.push(3);
            heap.push(5);

            expect(heap.traverse()).to.have.ordered.members([9, 8, 5, 7, 1, 3]);
        });

        it('should pop the elements in order', function () {
            const heap = new Heap();
            heap.push(1);
            heap.push(8);
            heap.push(7);
            heap.push(9);
            heap.push(3);
            heap.push(5);

            const actual = [];
            while(heap.peek() !== undefined) {
                actual.push(heap.pop());
            }

            expect(actual).to.have.ordered.members([1, 3, 5, 7, 8, 9]);
        });
        
    });
});