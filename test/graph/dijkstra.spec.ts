import UndirectedGraph from "../../src/graph/undirectedGraph";
import dijkstra from "../../src/graph/dijkstra";
import {expect} from "chai";

import getUndirectedGraph from "../testUtils/testUtils";

describe("#graph", function () {
    describe("#dijkstra", function () {
        let undirectedGraph: UndirectedGraph<number> = getUndirectedGraph();

        it("should get the shortest path from 1", function () {
            const actual = dijkstra(undirectedGraph, 1);
            expect(actual).to.exist;
            const expected = new Map([[1, Infinity], [2, 1], [3, 2], [4, 3], [5, 6], [6, 4]]);
            actual.forEach((distance, node) => {
                expect(distance).to.be.equal(expected.get(node.label));
            });
        });
    });
});
