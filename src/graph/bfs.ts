import Graph from "./graph";
import Queue from "../queue/queue";
import GraphNode from "./graphNode";
import Edge from "./edge";

/**
 * Breadth-first Search traversal 
 * @param {Graph} graph - graph which will be traversed 
 * @param {Object} startingLabel - label for the starting point 
 */
export default function bfs<T, U extends GraphNode<T, U>, V extends Edge<T, U>>(graph: Graph<T, U, V>, startingLabel: T): U[] {
    const startingNode: U = graph.node(startingLabel);
    const queue = new Queue<U>();
    queue.enqueue(...startingNode.getNeighbours());
    const visited = new Set();
    visited.add(startingNode);
    const tree = [startingNode];

    while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            tree.push(currentNode);
            currentNode.getNeighbours().forEach(node => queue.enqueue(node));
        }
    }

    return tree;
};