export default class Stack<T> {
    private _stack: T[] = [];

    get length(): number {
        return this._stack.length; 
    }

    push(...values: T[]) {
        this._stack.push(...values);
    }

    pop(): T {
        const top = this._stack.pop();
        if (!top) {
            throw new Error("No elements in stack!");
        }
        return top;
    }

    isEmpty() {
        return this.length <= 0;
    }
};