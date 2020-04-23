import Graph from "./graph";
import GraphNode from "./graphNode";
import Edge from "./edge";
import Stack from "../stack/stack";

/**
 * Dept-first search traversal 
 * @param {Graph} graph - graph which will be traversed 
 * @param {Object} startingLabel - label for the starting point 
 */
export default function dfs<T, U extends GraphNode<T, U>, V extends Edge<T, U>>(graph: Graph<T, U, V>, startingLabel: T): U[] {
    const startingNode = graph.node(startingLabel);
    const stack = new Stack<U>();
    stack.push(...startingNode.getNeighbours());
    const visited = new Set();
    visited.add(startingNode);
    const tree = [startingNode];

    while (!stack.isEmpty()) {
        const currentNode = stack.pop();
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            tree.push(currentNode);
            currentNode.getNeighbours().forEach(node => stack.push(node));
        }
    }

    return tree;
};