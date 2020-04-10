const BinarySearchTree = require('../../src/tree/binarySearchTree');
const chai = require('chai');
const expect = chai.expect;

describe('#tree', function () {
    describe('#binarySearchTree', function () {
        let bst;
        beforeEach(() => {
            bst = new BinarySearchTree();
        });

        it ('should create and traverse a tree', function () {
            bst.insert(5);
            bst.insert(3);
            bst.insert(4);
            bst.insert(6);
            bst.insert(1);
            const expected = [5, 3, 1, 4, 6];
            expect(bst.traverse()).to.have.ordered.members(expected);
        });
    });
});