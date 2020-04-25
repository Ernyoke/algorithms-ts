import Graph from "./graph";
import GraphNode from "./graphNode";
import Edge from "./edge";
import PriorityQueue from "../queue/priorityQueue";

export default function kruskal<T, U extends GraphNode<T, U, V>, V extends Edge<T, U, V>>(graph: Graph<T, U, V>): V[] {
    debugger;
    const nodes = graph.nodes;
    const nodeToForrest = new Map(nodes.map((node, index) => [node, index]))
    const forrestToNode = new Map(nodes.map((node, index) => [index, [node]]))

    const queue = new PriorityQueue<V>((edge1: V, edge2: V) => edge1.weigth < edge2.weigth);
    graph.edges.forEach(edge => queue.enqueue(edge));

    const getOrThrow = <K, V>(map: Map<K, V>, key: K) => {
        const value = map.get(key);
        if (value) {
            return value;
        }
        throw new Error("Undefined value!");
    }

    const tree: V[] = [];
    while (queue.length > 0) {
        const edge = queue.dequeue();
        const forest1 = nodeToForrest.get(edge.node1);
        const forest2 = nodeToForrest.get(edge.node2);
        if (forest1 !== undefined && forest2 !== undefined && forest1 != forest2) {
            tree.push(edge);
            nodeToForrest.set(edge.node2, forest1);
            getOrThrow(forrestToNode, forest2).forEach(node => nodeToForrest.set(node, forest1));
            getOrThrow(forrestToNode, forest1).push(...getOrThrow(forrestToNode, forest2));
            forrestToNode.set(forest2, []);
        }
    }

    return tree;
}
