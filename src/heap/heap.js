class Heap {
    _heap = [];

    constructor(comparator) {
        if (comparator) {
            this._comparator = comparator;
        } else {
            this._comparator = (a, b) => a < b;
        }
    }

    push(value) {
        this._heap.push(value);

        const heapify = index => {
            const parentIndex = Math.floor(index / 2);
            if (this._comparator(this._heap[index], this._heap[parentIndex])) {
                this._switch(index, parentIndex);

                if (parentIndex > 0) {
                    heapify(parentIndex);
                }
            }
        }

        heapify(this._heap.length - 1);
    }

    traverse() {
        return this._heap;
    }

    peek() {
        if (this._heap.length > 0) {
            return this._heap[0];
        }
    }

    pop() {
        if (this._heap.length < 1) {
            return;
        }

        if (this._heap.length == 1) {
            return this._heap.splice(this._heap.length - 1, 1)[0];
        }

        const head = this._heap[0];
        this._heap[0] = this._heap.splice(this._heap.length - 1, 1)[0];
        let length = this._heap.length;

        const heapify = (heap, index) => {
            const switchIndexOrder = ((heap, index) => {
                const leftChildIndex = 2 * index + 1;
                const rightChildIndex = 2 * index + 2;
                if (leftChildIndex < length && rightChildIndex < length) {
                    if (this._comparator(heap[leftChildIndex], heap[rightChildIndex])) {
                        return [leftChildIndex, rightChildIndex];
                    }
                    return [rightChildIndex, leftChildIndex];
                }
                if (leftChildIndex < length) {
                    return [leftChildIndex];
                }
                if (rightChildIndex < length) {
                    return [rightChildIndex];
                }
                return [];
            })(heap, index);

            const switchIndex = switchIndexOrder.find(switchIndex => this._comparator(heap[switchIndex], heap[index]));

            if (switchIndex) {
                this._switch(index, switchIndex);
                heapify(this._heap, switchIndex);
            }
        };

        heapify(this._heap, 0);

        return head;
    }

    _switch(index1, index2) {
        const aux = this._heap[index1];
        this._heap[index1] = this._heap[index2];
        this._heap[index2] = aux;
    }
}

module.exports = Heap;