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
            return this._stack.splice(this._stack.length - 1, 1)[0];
        }
    }
};

module.exports = Stack;