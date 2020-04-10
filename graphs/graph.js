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
        const node = new Node(label);
        const index = this._nodes.findIndex(n => node.isEqual(n))
        if (index >= 0) {
            return this.nodes[index];
        }
        this._nodes.push(node);
        return node;
    }

    addEdge(label1, label2, weigth) {
        const node1 = this.addNode(label1);
        const node2 = this.addNode(label2);
        const edge = new Edge(node1, node2, weigth);
        this._edges.push(edge);
        node1.addEdge(edge);
        node2.addEdge(edge);
        return edge;
    }

    getNumberOfNodes() {
        return this._nodes.length;
    }

    getNumberOfEdges() {
        return this.edges.length;
    }
}

class Node {
    constructor(label) {
        this._label = label;
        this._edges = [];
    }

    get label() {
        return this._label;
    }

    get edges() {
        return this._edges;
    }

    addEdge(edge) {
        this._edges.push(edge);
    }

    isEqual(node) {
        return this._label == node.label;
    }

    getNeighbours() {
        return this._edges.map(edge => edge.otherNode(this));
    }
}

class Edge {
    constructor(node1, node2, wieght) {
        this._node1 = node1;
        this._node2 = node2;
        this._weigth = wieght;
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

module.exports = {
    Graph: Graph,
    Edge: Edge,
    Node: Node
}; 