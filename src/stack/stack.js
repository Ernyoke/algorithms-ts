class Stack {
    _stack = [];

    get length() {
        return this._stack.length; 
    }

    push(...values) {
        this._stack.push(...values);
    }

    pop() {
        if (this._stack.length > 0) {
            return this._stack.pop();
        }
    }

    isEmpty() {
        return this.length <= 0;
    }
};

module.exports = Stack;