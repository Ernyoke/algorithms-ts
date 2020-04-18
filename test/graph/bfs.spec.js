const bfs = require('../../src/graph/bfs');
const { Graph } = require('../../src/graph/graph');
const chai = require('chai');
const expect = chai.expect;

describe('#graphs', function () {
    describe('#bfs', function () {
        let g;
        beforeEach(() => {
            g = new Graph();
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

        it ('should traverse the graph using breath-first search', function () {
            const actual = bfs(g, 1);
            expect(actual).to.exist;
            const expected = [1, 2, 6, 3, 4, 5];
            expected.forEach((expectedNode, index) => {
                expect(actual[index].label).to.be.equal(expectedNode)
            })
        });
    });
});