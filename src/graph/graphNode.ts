import Edge from "./edge";

export default abstract class GraphNode<T, U extends GraphNode<T, U, V>, V extends Edge<T, U, V>> {
    protected constructor(private _label: T) {
    }

    get label(): T {
        return this._label;
    }

    abstract get edges(): V[];

    isEqual(node: GraphNode<T, U, V>): boolean {
        return this._label == node.label;
    }

    abstract getNeighbours(): U[];

    /**
     * Should return the edge between this node and the input node
     * @param {GraphNode<T, U, V>}node - other node
     */
    abstract edgeToNode(node: U): V;
}

