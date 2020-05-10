import GraphNode from "./graphNode";
import Edge from "./edge";
import Graph from "./graph";

/**
 * Dijkstra's shortest path finding algorithm
 * @param {Graph} graph - graph which will be traversed
 * @param {Object} startingLabel - label for the starting point
 */
export default function dijkstra<T, U extends GraphNode<T, U, V>, V extends Edge<T, U, V>>(
    graph: Graph<T, U, V>,
    startingLabel: T): Map<U, number> {

    const startingNode = graph.node(startingLabel);

    const distanceMap = new Map();
    graph.nodes.forEach(node => distanceMap.set(node, Infinity));
    startingNode.edges.forEach(edge => distanceMap.set(edge.otherNode(startingNode), edge.weight));

    let isShorterDistance = true;
    while (isShorterDistance) {
        isShorterDistance = false;

        for (let node of graph.nodes) {
            if (node !== startingNode) {
                const distance = distanceMap.get(node);

                for (let edge of node.edges) {
                    const otherNode = edge.otherNode(node);
                    if (otherNode !== startingNode && distance + edge.weight < distanceMap.get(otherNode)) {
                        distanceMap.set(otherNode, distance + edge.weight);
                        isShorterDistance = true;
                    }
                }

            }
        }

    }
    return distanceMap;
};
