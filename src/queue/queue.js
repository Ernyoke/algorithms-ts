class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(value) {
        this._queue.push(value);
    }

    dequeue() {
        return this._queue.pop();
    }

    peek() {
        if (this._queue.length > 0) {
            return this._queue[this._queue.length - 1];
        }
    }

    get length() {
        return this._queue.length;
    }
}

module.exports = Queue;