import GraphNode from "./graphNode";

export default abstract class Edge<T, U extends GraphNode<T, U, V>, V extends Edge<T, U, V>> {
    protected constructor(private _weight: number) {
    }

    abstract get node1(): U;

    abstract get node2(): U;

    abstract isEqual(node1: GraphNode<T, U, V>, node2: GraphNode<T, U, V>): boolean;
    
    abstract hasNodeWithLabel(label: T): boolean;

    abstract otherNode(node: U): U;

    get weight(): number {
        return this._weight;
    }
}
