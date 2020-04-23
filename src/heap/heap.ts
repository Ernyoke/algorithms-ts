export default class Heap<T> {
    private _heap: T[] = [];

    constructor(private _comparator = (a: T, b: T) => a < b) {
    }

    push(value: T) {
        this._heap.push(value);

        const heapify = (index: number) => {
            const parentIndex = Math.floor(index / 2);
            if (this._comparator(this._heap[index], this._heap[parentIndex])) {
                this.switch(index, parentIndex);

                if (parentIndex > 0) {
                    heapify(parentIndex);
                }
            }
        }

        heapify(this._heap.length - 1);
    }

    traverse(): T[] {
        return this._heap;
    }

    peek(): T | undefined {
        if (this._heap.length > 0) {
            return this._heap[0];
        }
    }

    pop(): T {
        const heap = this._heap;

        if (heap.length < 0) {
            throw new Error("No element to pop!");
        }

        const top: T = (() => {
            const unsafeTop = heap.pop();
            if (unsafeTop) {
                return unsafeTop;
            }
            throw new Error();
        })();

        if (heap.length == 0) {
            return top;
        }

        const head = this._heap[0];
        heap[0] = top;
        const length = heap.length;

        const heapify = (index: number) => {
            const switchIndexOrder: number[] = ((index: number) => {
                const leftChildIndex = 2 * index + 1;
                const rightChildIndex = leftChildIndex + 1;
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
            })(index);

            const switchIndex = switchIndexOrder.find(switchIndex => this._comparator(heap[switchIndex], heap[index]));

            if (switchIndex) {
                this.switch(index, switchIndex);
                heapify(switchIndex);
            }
        };

        heapify(0);

        return head;
    }

    get length(): number {
        return this._heap.length;
    }

    private switch(index1: number, index2: number) {
        const aux = this._heap[index1];
        this._heap[index1] = this._heap[index2];
        this._heap[index2] = aux;
    }
}