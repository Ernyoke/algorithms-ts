import GraphNode from "./graphNode";

export default abstract class Edge<T, U extends GraphNode<T, U, V>, V extends Edge<T, U, V>> {
    constructor(private _weigth: number) {
    }

    abstract get node1(): U;

    abstract get node2(): U;

    abstract isEqual(node1: GraphNode<T, U, V>, node2: GraphNode<T, U, V>): boolean;
    
    abstract hasNodeWithLabel(label: T): boolean;

    abstract otherNode(node: U): U;

    get weigth(): number {
        return this._weigth;
    }
}