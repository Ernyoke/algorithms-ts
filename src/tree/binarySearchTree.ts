export default class BinarySearchTree<T> {
    private _depth: number = 0;
    private _root: TreeNode<T> | undefined;

    insert(value: T) {
        const setDepth = (newDepth: number) => {
            if (newDepth > this._depth) {
                this._depth = newDepth;
            }
        };

        if (!this._root) {
            this._root = new TreeNode(value);
            this._depth = 1;
        } else {
            let currentNode = this._root;
            let currentDepth = 1;
            while (true) {
                currentDepth++;
                if (value < currentNode.value) {
                    if (!currentNode.leftNode) {
                        currentNode.addLeftNode(value);
                        setDepth(currentDepth)
                        break;
                    }
                    currentNode = currentNode.leftNode;
                } else {
                    if (!currentNode.rightNode) {
                        currentNode.addRightNode(value);
                        setDepth(currentDepth);
                        break;
                    }
                    currentNode = currentNode.rightNode;
                }
            }
        }
    }

    traverseInorder(): T[] {
        const nodes: T[] = [];

        const recTraverse = (node: TreeNode<T> | undefined) => {
            if (node) {
                recTraverse(node.leftNode);
                nodes.push(node.value);
                recTraverse(node.rightNode);
            }
        }

        recTraverse(this._root);

        return nodes;
    }

    traversePreorder(): T[] {
        const nodes: T[] = [];

        const recTraverse = (node: TreeNode<T> | undefined) => {
            if (node) {
                nodes.push(node.value);
                recTraverse(node.leftNode);
                recTraverse(node.rightNode);
            }
        }

        recTraverse(this._root);

        return nodes;
    }

    traversePostorder() {
        let nodes: T[] = [];

        const recTraverse = (node: TreeNode<T> | undefined) => {
            if (node) {
                recTraverse(node.leftNode);
                recTraverse(node.rightNode);
                nodes.push(node.value);
            }
        }

        recTraverse(this._root);

        return nodes;
    }
    get depth() {
        return this._depth;
    }
}

class TreeNode<T> {
    private _leftNode: TreeNode<T> | undefined;
    private _rightNode: TreeNode<T> | undefined;

    constructor(private _value: T) {
    }

    get leftNode(): TreeNode<T> | undefined {
        return this._leftNode;
    }

    get rightNode(): TreeNode<T> | undefined {
        return this._rightNode;
    }

    get value(): T {
        return this._value;
    }

    addLeftNode(value: T) {
        this._leftNode = new TreeNode<T>(value);
    }

    addRightNode(value: T) {
        this._rightNode = new TreeNode<T>(value);
    }
}