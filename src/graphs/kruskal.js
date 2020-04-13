const PriorityQueue = require('../queue/priorityQueue');

const kruskal = graph => {
    const nodes = graph.nodes;
    const nodeToForrest = new Map(nodes.map((node, index) => [node, index]))
    const forrestToNode = new Map(nodes.map((node, index) => [index, [node]]))
    
    const queue = new PriorityQueue((edge1, edge2) => edge1.weigth < edge2.weigth);
    graph.edges.forEach(edge => queue.enqueue(edge));
    
    const tree = [];
    while (queue.length > 0) {
        const edge = queue.dequeue();
        const forest1 = nodeToForrest.get(edge.node1);
        const forest2 = nodeToForrest.get(edge.node2);
        if (forest1 != forest2) {
            tree.push(edge);
            nodeToForrest.set(edge.node2, forest1);
            forrestToNode.get(forest2).forEach(node => nodeToForrest.set(node, forest1));
            forrestToNode.get(forest1).push(...forrestToNode.get(forest2));
            forrestToNode.set(forest2, []);
        }
    }

    return tree;
}

module.exports = kruskal;