import { expect } from "chai";

import UndirectedGraph from "../../src/graph/undirectedGraph";
import DirectedGraph from "../../src/graph/directedGraph";
import prims from "../../src/graph/prims";

describe("#graph", function () {
    describe("#prims", function () {
        let undirectedGraph: UndirectedGraph<number>;
        let directedGraph: DirectedGraph<number>;
        beforeEach(() => {
            /*
                1<---------->2<----------+
                ^                        |
                |                        V
                +----------->3<--------->6
                |            ^
                |            |
                |            +---------->7
                |            |
                |            +---------->8
                |                        ^
                |                        |
                |                        V
                +----------->4<--------->5
             */
            undirectedGraph = new UndirectedGraph<number>();
            undirectedGraph.addEdge(1, 2, 5);
            undirectedGraph.addEdge(1, 3, 3);
            undirectedGraph.addEdge(1, 4, 6);
            undirectedGraph.addEdge(2, 6, 2);
            undirectedGraph.addEdge(3, 6, 3);
            undirectedGraph.addEdge(3, 7, 7);
            undirectedGraph.addEdge(3, 8, 8);
            undirectedGraph.addEdge(4, 5, 1);
            undirectedGraph.addEdge(5, 8, 7);

            /*
                1----------->2-----------+
                |                        |
                |                        V
                +----------->3---------->6
                |            |
                |            |
                |            +---------->7
                |            |
                |            +---------->8
                |                        ^
                |                        |
                |                        |
                +----------->4---------->5
             */
            directedGraph = new DirectedGraph<number>();
            directedGraph.addEdge(1, 2, 5);
            directedGraph.addEdge(1, 3, 3);
            directedGraph.addEdge(1, 4, 6);
            directedGraph.addEdge(2, 6, 2);
            directedGraph.addEdge(3, 6, 3);
            directedGraph.addEdge(3, 7, 7);
            directedGraph.addEdge(3, 8, 8);
            directedGraph.addEdge(4, 5, 1);
            directedGraph.addEdge(5, 8, 7);
        });

        it("it should throw an error if the node does not exists", function () {
            expect(() => { prims(undirectedGraph, 12) }).to.throw(Error, "No such node with label 12");
        });

        it("it should create a tree", function () {
            const result = prims(undirectedGraph, 1)
            const expected = [[1, 3], [3, 6], [2, 6], [1, 4], [4, 5], [3, 7], [5, 8]];
            expected.forEach((nodes, index) => {
                expect(result[index].hasNodeWithLabel(nodes[0])).to.be.true;
                expect(result[index].hasNodeWithLabel(nodes[1])).to.be.true;
            })
        });

        it("it should create a tree in case of directed graph", function () {
            const result = prims(directedGraph, 1)
            const expected = [[1, 3], [3, 6], [1, 2], [1, 4], [4, 5], [3, 7], [5, 8]];
            expected.forEach((nodes, index) => {
                expect(result[index].hasNodeWithLabel(nodes[0])).to.be.true;
                expect(result[index].hasNodeWithLabel(nodes[1])).to.be.true;
                expect(result[index].hasNodeWithLabel(nodes[1])).to.be.true;
                expect(result[index].outNode.label).to.be.equal(nodes[0]);
                expect(result[index].inNode.label).to.be.equal(nodes[1]);
            })
        });
    });
});
