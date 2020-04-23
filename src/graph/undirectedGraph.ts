import Graph from "./graph";
import UndirectedNode from "./undirectedNode";
import UndirectedEdge from "./undirectedEdge";

export default class UndirectedGraph<T> extends Graph<T, UndirectedNode<T>, UndirectedEdge<T>> {
    protected _edges: UndirectedEdge<T>[] = [];
    protected _nodes: UndirectedNode<T>[] = [];

    node(label: T): UndirectedNode<T> {
        const node = this._nodes.find(node => node.label == label);
        if (!node) {
            throw new Error(`No such node with label ${label}`);
        }
        return node;
    }

    get nodes(): UndirectedNode<T>[] {
        return this._nodes;
    }

    get edges(): UndirectedEdge<T>[] {
        return this._edges;
    }

    getNumberOfNodes(): number {
        return this._nodes.length;
    }

    getNumberOfEdges(): number {
        return this._edges.length;
    }
    
    addNode(label: T): UndirectedNode<T> {
        const node = new UndirectedNode<T>(label);
        const index = this._nodes.findIndex(n => node.isEqual(n))
        if (index >= 0) {
            return this._nodes[index];
        }
        this._nodes.push(node);
        return node;
    }

    addEdge(label1: T, label2: T, weigth: number): UndirectedEdge<T> {
        const node1 = this.addNode(label1);
        const node2 = this.addNode(label2);
        const edge = new UndirectedEdge<T>(node1, node2, weigth);
        this._edges.push(edge);
        node1.addEdge(edge);
        node2.addEdge(edge);
        return edge;
    }
}