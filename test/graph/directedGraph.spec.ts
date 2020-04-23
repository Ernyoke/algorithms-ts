import { expect } from "chai";

import DirectedGraph from "../../src/graph/directedGraph";

describe('#graph', function () {
    describe('#undirectedGraph', function () {
        it('should return the number of nodes', function () {
            const g = new DirectedGraph<string>();
            g.addNode('label1');
            g.addNode('label2');
            expect(g.getNumberOfNodes()).to.be.equal(2);
        });

        it('should return the number of edges', function () {
            const g = new DirectedGraph();
            g.addNode('label1');
            g.addNode('label2');
            g.addNode('label3');
            g.addEdge('label1', 'label2', 1);
            g.addEdge('label1', 'label3', 2);
            expect(g.getNumberOfEdges()).to.be.equal(2);
            expect(g.node('label1').outEdges.length).to.be.equal(2);
            expect(g.node('label1').inEdges.length).to.be.equal(0);
            expect(g.node('label2').inEdges.length).to.be.equal(1);
            expect(g.node('label2').outEdges.length).to.be.equal(0);
            expect(g.node('label3').inEdges.length).to.be.equal(1);
            expect(g.node('label3').outEdges.length).to.be.equal(0);
        });
    });
});