class Graph {
    _edges = [];
    _nodes = [];

    node(label) {
        return this.nodes.find(node => node.label == label);
    }

    get nodes() {
        return this._nodes;
    }

    get edges() {
        return this._edges;
    }

    addNode(label) {
        throw new Error('Abstract method not implemented!');
    }

    addEdge(label1, label2, weigth) {
        throw new Error('Abstract method not implemented!');
    }

    getNumberOfNodes() {
        return this._nodes.length;
    }

    getNumberOfEdges() {
        return this.edges.length;
    }
}

module.exports = Graph;