const Graph = require('./graph');
const UndirectedEdge = require('./undirectedEdge');
const UndirectedNode = require('./undirectedNode');

class UndirectedGraph extends Graph {
    addNode(label) {
        const node = new UndirectedNode(label);
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
        const edge = new UndirectedEdge(node1, node2, weigth);
        this._edges.push(edge);
        node1.addEdge(edge);
        node2.addEdge(edge);
        return edge;
    }
}

module.exports = UndirectedGraph;