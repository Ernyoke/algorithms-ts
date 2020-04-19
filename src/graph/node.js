class Node {
    constructor(label) {
        this._label = label;
    }

    get label() {
        return this._label;
    }

    isEqual(node) {
        return this._label == node.label;
    }
}

module.exports = Node;