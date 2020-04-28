import Graph from "./graph";
import DirectedNode from "./directedNode";
import DirectedEdge from "./directedEdge";

export default class DirectedGraph<T> extends Graph<T, DirectedNode<T>, DirectedEdge<T>> {
    protected _edges: DirectedEdge<T>[] = [];
    protected _nodes: DirectedNode<T>[] = [];

    node(label: T): DirectedNode<T> {
        const node = this._nodes.find(node => node.label == label);
        if (!node) {
            throw new Error(`No such node with label ${label}`);
        }
        return node;
    }

    get nodes(): DirectedNode<T>[] {
        return this._nodes;
    }

    get edges(): DirectedEdge<T>[] {
        return this._edges;
    }

    getNumberOfNodes(): number {
        return this._nodes.length;
    }

    getNumberOfEdges(): number {
        return this._edges.length;
    }

    addNode(label: T): DirectedNode<T> {
        const node = new DirectedNode(label);
        const index = this._nodes.findIndex(n => node.isEqual(n))
        if (index >= 0) {
            return this.nodes[index];
        }
        this._nodes.push(node);
        return node;
    }

    addEdge(outLabel: T, inLabel: T, weight: number) {
        const outNode = this.addNode(outLabel);
        const inNode = this.addNode(inLabel);
        const edge = new DirectedEdge(outNode, inNode, weight);
        this._edges.push(edge);
        outNode.addOutEdge(edge);
        inNode.addInEdge(edge);
        return edge;
    }
}
