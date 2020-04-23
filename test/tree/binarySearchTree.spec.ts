import { expect } from "chai"

import BinarySearchTree from "../../src/tree/binarySearchTree";

describe('#tree', function () {
    describe('#binarySearchTree', function () {
        let bst;
        beforeEach(() => {
            bst = new BinarySearchTree();

            /*
                        5
                       / \
                      3   6
                     / \   \
                    1   4   7
            */

            bst.insert(5);
            bst.insert(3);
            bst.insert(4);
            bst.insert(6);
            bst.insert(7);
            bst.insert(1);
        });

        it('should create and do inorder traversal', function () {
            const expected = [1, 3, 4, 5, 6, 7];
            expect(bst.traverseInorder()).to.have.ordered.members(expected);
        });

        it('should create and do preorder traversal', function () {
            const expected = [5, 3, 1, 4, 6, 7];
            expect(bst.traversePreorder()).to.have.ordered.members(expected);
        });

        it('should create and do postorder traversal', function () {
            const expected = [1, 4, 3, 7, 6, 5];
            expect(bst.traversePostorder()).to.have.ordered.members(expected);
        });

        it('should get the correct depth of the tree', function () {
            expect(bst.depth).to.be.equal(3);
        });
    });
});