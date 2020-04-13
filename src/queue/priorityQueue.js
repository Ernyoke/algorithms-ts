const Heap = require('../heap/heap');

class PriorityQueue {
    constructor(comparator) {
        this._queue = new Heap(comparator);
    }

    enqueue(value) {
        this._queue.push(value);
    }

    dequeue() {
        return this._queue.pop();
    }

    peek() {
        return this._queue.peek();
    }

    get length() {
        return this._queue.length;
    }
}

module.exports = PriorityQueue;