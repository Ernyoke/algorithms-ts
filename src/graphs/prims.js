const PriorityQueue = require('../queue/priorityQueue');

const prims = (graph, startingLabel) => {
    const firstNode = graph.node(startingLabel);
    if (!firstNode) {
        throw new Error(`No such node with label ${startingLabel}`);
    }

    const queue = new PriorityQueue((edge1, edge2) => edge1.weigth < edge2.weigth);
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

        const addEdgesToQueue = node => {
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

module.exports = prims;
