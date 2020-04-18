const Queue = require('../queue/queue');

/**
 * Breadth-first Search traversal 
 * @param {Graph} graph - graph which will be traversed 
 * @param {Object} startingLabel - label for the starting point 
 */
const bfs = (graph, startingLabel) => {
    const startingNode = graph.node(startingLabel);
    const queue = new Queue();
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

module.exports = bfs;