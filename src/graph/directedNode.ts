import GraphNode from "./graphNode";
import DirectedEdge from "./directedEdge";

/**
 * Implementation for a node (vertex) which should be part of a directed graph.
 * The difference between an undirected node and a directed node is that in case of a directed node,
 * the set of outgoing edges are separated from the set on incoming edges.
 */
export default class DirectedNode<T> extends GraphNode<T, DirectedNode<T>, DirectedEdge<T>> {
    private _inEdges: DirectedEdge<T>[] = [];
    private _outEdges: DirectedEdge<T>[] = [];
    
    constructor(label: T) {
        super(label);
    }
    
    get inEdges(): DirectedEdge<T>[] {
        return this._inEdges
    }
    
    get outEdges(): DirectedEdge<T>[] {
        return this._outEdges;
    }
   
    
    addInEdge(edge: DirectedEdge<T>) {
        this._inEdges.push(edge);
    }
    
    addOutEdge(edge: DirectedEdge<T>) {
        this._outEdges.push(edge);
    }
    
    /**
     * In case of directed node for edges we return only those edges which are pointing to other node (out edges);
     */
    get edges(): DirectedEdge<T>[] {
        return this.outEdges;
    }

    /**
     * In case of a directed node we consider the neighbours to be the nodes to which we direct to.
     */
    getNeighbours(): DirectedNode<T>[] {
        return this._outEdges.map(edge => edge.otherNode(this));
    }

    edgeToNode(node: DirectedNode<T>): DirectedEdge<T> {
        const edge = this._outEdges.find(edge => edge.otherNode(node));
        if (!edge) {
            throw new Error("There is no edge between the nodes!");
        }
        return edge;
    }
}
