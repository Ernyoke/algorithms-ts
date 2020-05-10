import UndirectedGraph from "../../src/graph/undirectedGraph";

export default function getUndirectedGraph(): UndirectedGraph<number> {
    /**
     *                 6-----------+---------------+
     *                             |               |
     *                             +-----------+   |
     *                             |           |   |
     * 1 --------------2-----------4------+    |   |
     * |                                  |    |   |
     * |                                  |    |   |
     * +-------3--------------------------+    |   |
     *         |                               |   |
     *         +----------5--------------------+   |
     *                    |                        |
     *                    +------------------------+
     */
    const graph = new UndirectedGraph<number>();
    graph.addEdge(1, 2, 1);
    graph.addEdge(1, 3, 2);
    graph.addEdge(2, 4, 2);
    graph.addEdge(2, 6, 4);
    graph.addEdge(3, 4, 2);
    graph.addEdge(3, 5, 4);
    graph.addEdge(4, 5, 5);
    graph.addEdge(4, 6, 1);
    graph.addEdge(5, 6, 3);

    return graph;
}
