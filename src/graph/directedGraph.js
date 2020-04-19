const Graph = require('./graph');
const DirectedNode = require('./directedNode');
const DirectedEdge = require('./directedEdge');

class DirectedGraph extends Graph {
    addNode(label) {
        const node = new DirectedNode(label);
        const index = this._nodes.findIndex(n => node.isEqual(n))
        if (index >= 0) {
            return this.nodes[index];
        }
        this._nodes.push(node);
        return node;
    }

    addEdge(outLabel, inLabel, weigth) {
        const outNode = this.addNode(outLabel);
        const inNode = this.addNode(inLabel);
        const edge = new DirectedEdge(outNode, inNode, weigth);
        this._edges.push(edge);
        outNode.addOutEdge(edge);
        inNode.addInEdge(edge);
        return edge;
    }
}

module.exports = DirectedGraph;