function BinarySearchTree() {
    this.root = null;
}

function Node (val) {
    this.left = null;
    this.right = null;
    this.value = val;
}

// Insert into the tree
BinarySearchTree.prototype.insert = function(val) {
    if (this.root == null) {
        this.root = new Node(val);
        return;
    }
    var newNode = new Node(val);
    var currentNode = this.root;
    while (currentNode) {
        if(newNode.value < currentNode.value) {
            // Traverse left
            if (currentNode.left == null) {
                currentNode.left = newNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else if (newNode.value > currentNode.value) {
            // Traverse Right!!!
            if (currentNode.right == null) {
                currentNode.right = newNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

// Complete a BFS
BinarySearchTree.prototype.BreadthFirstSearch = function() {
    var Queue = [];
    Queue.push(this.root);
    while (Queue.length > 0) {
        current = Queue.shift();
        console.log(current.value);
        if (current.left){
            Queue.push(current.left);
        }
        if (current.right) {
            Queue.push(current.right);
        }
    }
    return;
}

var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(18);
bst.insert(5);
bst.insert(7);
bst.insert(9);
bst.insert(13);
debugger;
console.log(bst.BreadthFirstSearch());
debugger;
