import GraphNode from "./graphNode";
import UndirectedEdge from "./undirectedEdge";

export default class UndirectedNode<T> extends GraphNode<T, UndirectedNode<T>, UndirectedEdge<T>> {
    private readonly _edges: UndirectedEdge<T>[];

    constructor(label: T) {
        super(label);
        this._edges = [];
    }

    get edges(): UndirectedEdge<T>[] {
        return this._edges;
    }

    addEdge(edge: UndirectedEdge<T>) {
        this._edges.push(edge);
    }

    getNeighbours(): UndirectedNode<T>[] {
        return this._edges.map(edge => edge.otherNode(this));
    }
}
