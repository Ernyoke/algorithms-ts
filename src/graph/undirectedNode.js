const Node = require('./node');

class UndirectedNode extends Node {
    constructor(label) {
        super(label);
        this._edges = [];
    }

    get edges() {
        return this._edges;
    }

    addEdge(edge) {
        this._edges.push(edge);
    }

    getNeighbours() {
        return this._edges.map(edge => edge.otherNode(this));
    }
}

module.exports = UndirectedNode;