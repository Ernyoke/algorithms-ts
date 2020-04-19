const UndirectedGraph = require('../../src/graph/undirectedGraph');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const expect = chai.expect;

describe('#graph', function () {
    describe('#undirectedGraph', function () {
        it('should return the number of nodes', function () {
            const g = new UndirectedGraph();
            g.addNode('label1');
            g.addNode('label2');
            expect(g.getNumberOfNodes()).to.be.equal(2);
        });

        it('should return the number of edges', function () {
            const g = new UndirectedGraph();
            g.addNode('label1');
            g.addNode('label2');
            g.addNode('label3');
            g.addEdge('label1', 'label2', 1);
            g.addEdge('label1', 'label3', 2);
            expect(g.getNumberOfEdges()).to.be.equal(2);
            expect(g.node('label1').edges.length).to.be.equal(2);
            expect(g.node('label2').edges.length).to.be.equal(1);
            expect(g.node('label3').edges.length).to.be.equal(1);
        });
    });
});