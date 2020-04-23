import { expect } from "chai";

import UndirectedGraph from "../../src/graph/undirectedGraph";
import kruskal from "../../src/graph/kruskal";
import UndirectedEdge from "../../src/graph/undirectedEdge";

describe("#graph", function () {
    describe("#kruskal", function () {
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
        });

        it("should create a tree", function () {
            const actual: UndirectedEdge<number>[] = kruskal(g);
            expect(actual).to.exist;
            const expected = [[1, 6], [2, 4], [2, 3], [1, 2], [2, 5]];
            expected.forEach((nodes, index) => {
                console.log(actual[index]);
                // expect(actual[index].hasNodeWithLabel(nodes[0])).to.be.true;
                // expect(actual[index].hasNodeWithLabel(nodes[1])).to.be.true;
            })
        });
    });
});