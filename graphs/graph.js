class Graph {
    edges = [];
    nodes = [];

    getNode(label) {
        return this.nodes.find(node => node.label == label);
    }

    addNode(label) {
        const node = new Node(label);
        const index = this.nodes.findIndex(n => node.isEqual(n))
        if (index >= 0) {
            return this.nodes[index];
        }
        this.nodes.push(node);
        return node; 
    }

    addEdge(label1, label2, weigth) {
        const node1 = this.addNode(label1);
        const node2 = this.addNode(label2);
        const edge = new Edge(node1, node2, weigth);
        this.edges.push(edge);
        node1.addEdge(edge);
        node2.addEdge(edge);
        return edge;
    }

    getNumberOfNodes() {
        console.log("ASD:", this.nodes);
        return this.nodes.length;
    }

    getNumberOfEdges() {
        return this.edges.length;
    }
}

class Node {
    constructor(label) {
        this.label = label;
        this.edges = [];
    }

    addEdge(edge) {
        this.edges.push(edge);
    }

    isEqual(node) {
        return this.label == node.label;
    }
}

class Edge {
    constructor(node1, node2, wieght) {
        this.node1 = node1;
        this.node2 = node2;
        this.weigth = wieght;
    }

    isEqual(node1, node2) {
        return this.node1.isEqual(node1) && this.node2.isEqual(node2) || this.node1.isEqual(node2) && this.node2.isEqual(node1);
    }
}

module.exports = {
    Graph: Graph,
    Edge: Edge,
    Node: Node
}; 