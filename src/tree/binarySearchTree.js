class BinarySearchTree {
    depth = 1;

    insert(value) {
        const setDepth = newDepth => {
            if (newDepth < this.depth) {
                this.depth = newDepth;
            }
        };

        if (!this._root) {
            this._root = new TreeNode(value);
        } else {
            let currentNode = this._root;
            let currentDepth = 1;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.leftNode) {
                        currentNode.leftNode = value;
                        setDepth(currentDepth)
                        break;
                    }
                    currentNode = currentNode.leftNode;
                } else {
                    if (!currentNode.rightNode) {
                        currentNode.rightNode = value;
                        setDepth(currentDepth);
                        break;
                    }
                    currentNode = currentNode.rightNode;
                }
                currentDepth++;
            }
        }
    }

    traverse() {
        let nodes = [];

        const recTraverse = node => {
            if (node) {
                nodes.push(node.value);
                recTraverse(node.leftNode);
                recTraverse(node.rightNode);
            }
        }

        recTraverse(this._root);

        return nodes;
    }
}

class TreeNode {
    constructor(value) {
        this._value = value;
    }

    get leftNode() {
        return this._leftNode;
    }

    get rightNode() {
        return this._rightNode;
    }

    get value() {
        return this._value;
    }

    set leftNode(value) {
        this._leftNode = new TreeNode(value);
    }

    set rightNode(value) {
        this._rightNode = new TreeNode(value);
    }
}

module.exports = BinarySearchTree;