var { Queue } = require('./Queue');

function Node(val) {
    this.left = null;
    this.right = null;
    this.value = val;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.push = function(val) {

    if(this.root == null) {
        this.root = new Node(val);
        return;
    }

    var currentNode = this.root;
    var newNode = new Node(val);

    while (currentNode) {
        if (currentNode.value > newNode.value) {
            if (currentNode.left) {
                currentNode = currentNode.left;
            } else {
                currentNode.left = newNode;
                break;
            }
        } else if(currentNode.value < newNode.value) {
            if (currentNode.right) {
                currentNode = currentNode.right;
            } else {
                currentNode.right = newNode;
                break;
            }
        }
    }

}

BinarySearchTree.prototype.find = function(val) {
    
    var currentNode = this.root;

    while (currentNode) {
        if(currentNode.value === val) {
            return true;
        } else if (val < currentNode.value) {
            currentNode = currentNode.left;
        } else if (val > currentNode.value) {
            currentNode = currentNode.right;
        }
    }
    return false;
    // Here
}

BinarySearchTree.prototype.BFS = function() {
    var queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
        currentNode = queue.dequeue();
        console.log(currentNode.value);
        if (currentNode.left) {
            queue.enqueue(currentNode.left);
        }
        if (currentNode.right) {
            queue.enqueue(currentNode.right);
        }
    }
}

BinarySearchTree.prototype.inordertraversal = function() {
    // Given a binary search tree return an array of all elements of the tree in ascending order.

    // I will use a stack data structure to perform a Depth First Search Traversal
    // And I will write it in the form of an iterative solution.

    
}

var b = new BinarySearchTree();
b.push(5);
b.push(10);
b.push(3);
b.push(6);
b.push(17);
b.push(4);
b.BFS();
/*

            5
        3        10
     4     6   x      17        


*/

// console.log(b.find(5));
// console.log(b.find(1));
// console.log(b.find(10));
// console.log(b.find(100));
// console.log(b.find(3));
// console.log(b.find(18));
// console.log(b.find(6));
// console.log(b.find(-1));
// console.log(b.find(17));
// console.log(b.find(7));
// console.log(b.find(4));

// console.log(b);

// var Q = new Queue();
// Q.enqueue(3);
// Q.enqueue(1);
// Q.enqueue(4);
// Q.enqueue(1);
// Q.enqueue(5);
// Q.enqueue(9);
// console.log(Q.queue_size()); // Should be 6
// console.log(Q.isEmpty()); // Should return False
// console.log(Q.front()); // Should return 3
// console.log(Q.end()); // should return 9
// console.log(Q.dequeue()); // should return 3
// console.log(Q.dequeue()); // should return 1
// console.log(Q.dequeue()); // should return 4
// console.log(Q.front()); // should return 1
// console.log(Q.end()); // should return 9
// console.log(Q.isEmpty()); // shoudl return false
// console.log(Q.dequeue()); // should return 1
// console.log(Q.dequeue()); // should return 5
// console.log(Q.dequeue()); // should return 9
// console.log(Q.isEmpty()); // Should return true
// console.log(Q.front()); // shoud return false/ error
// console.log(Q.end()); // should return false / error
// console.log(Q.dequeue()); // shoudl return false/ error