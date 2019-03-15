class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

test = new Node(3.14)
console.log(test.data); // Pass
console.log(test.left); // Pass
console.log(test.right); // Pass

class BST {
    constructor(root = null) {
        this.root = root;
    }
    add(data) {
        const node = this.root;
        //base case if the tree is empty
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const search = function(node) {
                if (data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return search(node.left);
                    }
                } else if (data > node.data) {
                    if(node.right === null ) {
                        node.right = new Node(data);
                        return;
                    } else if ( node.right !== null) {
                        return search(node.right);
                    }
                }
            };
            search(node);
        }         
    };
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    inOrderTraversal() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traverseInOrder(node) {
                // if (...) {traverse while not null}
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        };
    }
    preOrderTraversal() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right)
            }
            traversePreOrder(this.root);
            return result;
        }
    }
    postOrderTraversal() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }
} // class BST

const bst = new BST;
bst.add(5);
bst.add(3);
bst.add(9);
bst.add(1);
bst.add(2);
bst.add(7);

const min = bst.findMin();
const max = bst.findMax();

console.log(`This minimum value is ${min}`);
console.log(`The maximum value is ${max}`);

result = bst.inOrderTraversal();
console.log(result);

console.log(bst.preOrderTraversal());
console.log(bst.postOrderTraversal());
