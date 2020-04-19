const Node = require('./node');

class DirectedNode extends Node {
constructor(label) {
        super(label);
        this._inEdges = [];
        this._outEdges = [];
    }

    get inEdges() {
        return this._inEdges;
    }


    get outEdges() {
        return this._outEdges;
    }

    addInEdge(edge) {
        this._inEdges.push(edge);
    }

    addOutEdge(edge) {
        this._outEdges.push(edge);
    }

    /**
     * In case of a directed node we consider the neighbours to be the nodes to which we direct to.
     */
    getNeighbours() {
        return this._outEdges.map(edge => edge.otherNode(this));
    }
}

module.exports = DirectedNode;