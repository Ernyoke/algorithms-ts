import {expect} from "chai";

import UndirectedGraph from "../../src/graph/undirectedGraph";
import bfs from "../../src/graph/bfs";
import DirectedGraph from "../../src/graph/directedGraph";

describe("#graph", function () {
    describe("#bfs", function () {
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

        it("should traverse an undirected graph using breath-first search", function () {
            const actual = bfs(undirectedGraph, 1);
            expect(actual).to.exist;
            const expected = [1, 2, 6, 3, 4, 5];
            expected.forEach((expectedNode, index) => {
                expect(actual[index].label).to.be.equal(expectedNode)
            })
        });

        it("should traverse a directed graph using breath-first search", function () {
            const actual = bfs(directedGraph, 1);
            expect(actual).to.exist;
            const expected = [1, 2, 6, 3, 4, 5];
            expected.forEach((expectedNode, index) => {
                expect(actual[index].label).to.be.equal(expectedNode)
            })
        });
    });
});
