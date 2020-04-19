const Edge = require('./edge');

class UndirectedEdge extends Edge {
    constructor(node1, node2, weight) {
        super(weight);
        this._node1 = node1;
        this._node2 = node2;
    }

    get node1() {
        return this._node1;
    }

    get node2() {
        return this._node2;
    }

    get weigth() {
        return this._weigth;
    }

    isEqual(node1, node2) {
        return this._node1.isEqual(node1) && this._node2.isEqual(node2) || this._node1.isEqual(node2) && this._node2.isEqual(node1);
    }

    otherNode(node) {
        if (this._node1.isEqual(node)) {
            return this._node2;
        }
        return this._node1;
    }

    hasNodeWithLabel(label) {
        return this._node1.label === label || this._node2.label === label;
    }
}

module.exports = UndirectedEdge;