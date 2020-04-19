const Node = require('./node');

/**
 * Implementation for a node (vertex) which should be part of a directed graph.
 * The difference between an undirected node and a directed node is that in case of a directed node,
 * the set of outgoind edges are separated from the set on incoming edges.
 */
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