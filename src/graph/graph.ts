import GraphNode from "./graphNode";
import Edge from "./edge";

export default abstract class Graph<T, U extends GraphNode<T, U, V>, V extends Edge<T, U, V>> {
    abstract node(label: T): U;

    abstract get nodes(): U[];

    abstract get edges(): V[];

    abstract addNode(label: T): U;

    abstract addEdge(label1: T, label2: T, weigth: number): V;

    abstract getNumberOfNodes(): number;

    abstract getNumberOfEdges(): number;
}