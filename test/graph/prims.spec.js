const prims = require('../../src/graph/prims');
const UndirectegGraph = require('../../src/graph/undirectedGraph');
const chai = require('chai')
const expect = chai.expect;

describe('#graph', function () {
    describe('#prims', function () {
        let g;
        beforeEach(() => {
            g = new UndirectegGraph();
            g.addEdge(1, 2, 5);
            g.addEdge(1, 3, 3);
            g.addEdge(1, 4, 6);
            g.addEdge(2, 6, 2);
            g.addEdge(3, 6, 3);
            g.addEdge(3, 7, 7);
            g.addEdge(3, 8, 8);
            g.addEdge(4, 5, 1);
            g.addEdge(5, 8, 7);
        });

        it('it should throw an error if the node does not exists', function () {
            expect(() => { prims(g, 'startingPoint') }).to.throw(Error, 'No such node with label startingPoint');
        });

        it('it should create a tree', function () {
            const result = prims(g, 1)
            const expected = [[1, 3], [3, 6], [2, 6], [1, 4], [4, 5], [3, 7], [5, 8]];
            expected.forEach((nodes, index) => {
                expect(result[index].hasNodeWithLabel(nodes[0])).to.be.true;
                expect(result[index].hasNodeWithLabel(nodes[1])).to.be.true;
            })
        });
    });
});
