const Stack = require('../stack/stack');

/**
 * Dept-first search traversal 
 * @param {Graph} graph - graph which will be traversed 
 * @param {Object} startingLabel - label for the starting point 
 */
const dfs = (graph, startingLabel) => {
    const startingNode = graph.node(startingLabel);
    const stack = new Stack();
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

module.exports = dfs;