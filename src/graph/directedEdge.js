const Edge = require('./edge');

class DirectedEdge extends Edge {
    constructor(outNode, inNode, weight) {
        super(weight);
        this._outNode = outNode;
        this._inNode = inNode;
    }

    get outNode() {
        return this._outNode;
    }

    get inNode() {
        return this._inNode;
    }

    isEqual(outNode, inNode) {
        return this._outNode.isEqual(inNode) && this._inNode.isEqual(outNode);
    }

    /**
     * In case of a directed Edge, we return the other node if we direct to it. 
     * @param {Node} node 
     */
    otherNode(node) {
        if (this._inNode.isEqual(node)) {
            return this._outNode;
        }
    }

    hasNodeWithLabel(label) {
        return this._outNode.label === label || this._inNode.label === label;
    }
}

module.exports = DirectedEdge;