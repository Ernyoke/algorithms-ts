const Stack = require('../stack/stack');

const dfs = (graph, startingPoint) => {
    const startingNode = graph.getNode(startingPoint);
    const stack = new Stack()
    stack.push(...startingNode.getNeighbours());
    const visited = new Set();
    visited.add(startingNode);
    const tree = [startingNode];

    while (stack.length > 0) {
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