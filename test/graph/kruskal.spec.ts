import {expect} from "chai";

import UndirectedGraph from "../../src/graph/undirectedGraph";
import kruskal from "../../src/graph/kruskal";
import UndirectedEdge from "../../src/graph/undirectedEdge";
import DirectedGraph from "../../src/graph/directedGraph";
import DirectedEdge from "../../src/graph/directedEdge";

describe("#graph", function () {
    describe("#kruskal", function () {
        let undirectedGraph: UndirectedGraph<number>;
        let directedGraph: DirectedGraph<number>;
        beforeEach(() => {
            /*
                        +------>5
                        |
                        |
                        +------>4
                        |       ^
                        |       |
                        V       V
                1 <---> 2 <---> 3
                ^               ^
                |               |
                v               |
                6<--------------+
            */
            undirectedGraph = new UndirectedGraph<number>();
            undirectedGraph.addEdge(1, 2, 3);
            undirectedGraph.addEdge(1, 6, 1);
            undirectedGraph.addEdge(2, 3, 3);
            undirectedGraph.addEdge(2, 4, 2);
            undirectedGraph.addEdge(2, 5, 4);
            undirectedGraph.addEdge(3, 4, 6);
            undirectedGraph.addEdge(3, 6, 5);

            /*
                      +---->5
                      |
                      |
                      +---->4
                      |     ^
                      |     |
                1 --> 2 --> 3
                |           |
                |           |
                v           |
                6<----------+
            */
            directedGraph = new DirectedGraph<number>();
            directedGraph.addEdge(1, 2, 3);
            directedGraph.addEdge(1, 6, 1);
            directedGraph.addEdge(2, 3, 3);
            directedGraph.addEdge(2, 4, 2);
            directedGraph.addEdge(2, 5, 4);
            directedGraph.addEdge(3, 4, 6);
            directedGraph.addEdge(3, 6, 5);
        });

        it("should create a tree from an undirected graph", function () {
            const actual: UndirectedEdge<number>[] = kruskal(undirectedGraph);
            expect(actual).to.exist;
            const expected = [[1, 6], [2, 4], [2, 3], [1, 2], [2, 5]];
            expected.forEach((nodes, index) => {
                expect(actual[index].hasNodeWithLabel(nodes[0])).to.be.true;
                expect(actual[index].hasNodeWithLabel(nodes[1])).to.be.true;
            })
        });

        it("should create a tree from a directed graph", function () {
            const actual: DirectedEdge<number>[] = kruskal(directedGraph);
            expect(actual).to.exist;
            const expected = [[1, 6], [2, 4], [2, 3], [1, 2], [2, 5]];
            expected.forEach((nodes, index) => {
                expect(actual[index].hasNodeWithLabel(nodes[0])).to.be.true;
                expect(actual[index].hasNodeWithLabel(nodes[1])).to.be.true;
            })
        });
    });
});
