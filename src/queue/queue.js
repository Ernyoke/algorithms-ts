class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(...value) {
        this._queue.push(...value);
    }

    dequeue() {
        return this._queue.shift();
    }

    peek() {
        if (this._queue.length > 0) {
            return this._queue[0];
        }
    }

    get length() {
        return this._queue.length;
    }

    isEmpty() {
        return this.length <= 0;
    }
}

module.exports = Queue;