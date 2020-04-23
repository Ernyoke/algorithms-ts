import Heap from "../heap/heap";

export default class PriorityQueue<T> {
    private _queue: Heap<T>;

    constructor(comparator = (a: T, b: T) => a < b) {
        this._queue = new Heap<T>(comparator);
    }

    enqueue(value: T) {
        this._queue.push(value);
    }

    dequeue(): T {
        return this._queue.pop();
    }

    peek(): T | undefined {
        return this._queue.peek();
    }

    get length(): number {
        return this._queue.length;
    }
}