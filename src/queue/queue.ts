export default class Queue<T> {
    private _queue: T[] = [];

    enqueue(...value: T[]) {
        this._queue.push(...value);
    }

    dequeue(): T {
        const head = this._queue.shift();
        if (!head) {
            throw new Error("Head is undefined!");
        } 
        return head;
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