class Edge {
    constructor(weight) {
        this._weigth = weight;
    }

    get weigth() {
        return this._weigth;
    }

    isEqual(node1, node2) {
        throw new Error('Abstract method not implemented!');
    }

    hasNodeWithLabel(label) {
        throw new Error('Abstract method not implemented!');
    }
}

module.exports = Edge;