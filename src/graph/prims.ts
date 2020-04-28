import PriorityQueue from "../queue/priorityQueue";
import GraphNode from "./graphNode";
import Edge from "./edge";
import Graph from "./graph";

export default function prims<T, U extends GraphNode<T, U, V>, V extends Edge<T, U, V>>(graph: Graph<T, U, V>, startingLabel: T) {
    const firstNode: GraphNode<T, U, V> = graph.node(startingLabel);
    const queue = new PriorityQueue<V>((edge1: V, edge2: V) => edge1.weight < edge2.weight);

    firstNode.edges.forEach((edge) => {
        queue.enqueue(edge);
    });

    const visited = new Set();
    visited.add(firstNode);

    const tree = [];
    while (queue.length > 0) {
        const edge = queue.dequeue();
        if (visited.has(edge.node1) && visited.has(edge.node2)) {
            continue;
        }
        tree.push(edge);

        const addEdgesToQueue = (node: U) => {
            if (!visited.has(node)) {
                visited.add(node);
                const edges = node.edges;
                edges.forEach(e => {
                    const otherNode = e.otherNode(node);
                    if (!visited.has(otherNode)) {
                        queue.enqueue(e);
                    }
                });
            }
        };

        addEdgesToQueue(edge.node1);
        addEdgesToQueue(edge.node2);
    }

    return tree;
}
