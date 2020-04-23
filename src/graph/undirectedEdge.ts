import Edge from "./edge";
import UndirectedNode from "./undirectedNode";

export default class UndirectedEdge<T> extends Edge<T, UndirectedNode<T>, UndirectedEdge<T>> {
    constructor(private _node1: UndirectedNode<T>, private _node2: UndirectedNode<T>, weight: number) {
        super(weight);
    }

    get node1() {
        return this._node1;
    }

    get node2() {
        return this._node2;
    }

    isEqual(node1: UndirectedNode<T>, node2: UndirectedNode<T>): boolean {
        return this._node1.isEqual(node1) && this._node2.isEqual(node2) || this._node1.isEqual(node2) && this._node2.isEqual(node1);
    }

    otherNode(node: UndirectedNode<T>) {
        if (this._node1.isEqual(node)) {
            return this._node2;
        }
        return this._node1;
    }

    hasNodeWithLabel(label: T) {
        return this._node1.label === label || this._node2.label === label;
    }
}