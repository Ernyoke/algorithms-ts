import { expect } from "chai";

import UndirectedGraph from "../../src/graph/undirectedGraph";
import dfs from "../../src/graph/dfs";

describe("#graph", function () {
    describe("#dfs", function () {
        let g: UndirectedGraph<number>;
        beforeEach(() => {
            g = new UndirectedGraph<number>();
            g.addEdge(1, 2, 3);
            g.addEdge(1, 6, 1);
            g.addEdge(2, 3, 3);
            g.addEdge(2, 4, 2);
            g.addEdge(2, 5, 4);
            g.addEdge(3, 4, 6);
            g.addEdge(3, 6, 5);

            /*
                      +---->5
                      |
                      |
                      +---->4
                      |     ^ 
                      |     |
                1 --> 2 --> 3
                |           ^
                |           |
                v           |
                6-----------+
            */
        });

        it ("should traverse the graph using depth-first search", function () {
            const actual = dfs(g, 1);
            expect(actual).to.exist;
            const expected = [1, 6, 3, 4, 2, 5];
            expected.forEach((expectedNode, index) => {
                expect(actual[index].label).to.be.equal(expectedNode)
            })
        });
    });
});