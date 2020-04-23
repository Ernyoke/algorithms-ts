import Edge from "./edge";
import DirectedNode from "./directedNode";

/**
 * Implementation of a directional edge for a directed graph.
 * The edge contains an out-node and an in-node. The direction of the edge is from the out-node to the in-node.
 */
export default class DirectedEdge<T> extends Edge<T, DirectedNode<T>, DirectedEdge<T>> {
    private _outNode: DirectedNode<T>;
    private _inNode: DirectedNode<T>;

    constructor(outNode: DirectedNode<T>, inNode: DirectedNode<T>, weight: number) {
        super(weight);
        this._outNode = outNode;
        this._inNode = inNode;
    }

    get outNode(): DirectedNode<T> {
        return this._outNode;
    }

    get inNode(): DirectedNode<T> {
        return this._inNode;
    }

    get node1(): DirectedNode<T> {
        return this.outNode;
    }

    get node2(): DirectedNode<T> {
        return this.inNode;
    }

    isEqual(outNode: DirectedNode<T>, inNode: DirectedNode<T>) {
        return this._outNode.isEqual(inNode) && this._inNode.isEqual(outNode);
    }

    otherNode(node: DirectedNode<T>): DirectedNode<T> {
        if (this._inNode.isEqual(node)) {
            return this._outNode;
        }
        return this._inNode;
    }

    hasNodeWithLabel(label: T): boolean {
        return this._outNode.label === label || this._inNode.label === label;
    }
}