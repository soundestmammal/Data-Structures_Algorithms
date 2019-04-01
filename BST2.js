function Node(val) {
    this.left = null;
    this.right = null;
    this.value = val;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.push = function(val) {

    if(!this.root) {
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
}


var b = new BinarySearchTree();

b.push(5);
b.push(10);
b.push(3);
b.push(6);
b.push(17);
b.push(4);
console.log(b.find(5));
console.log(b.find(1));
console.log(b.find(10));
console.log(b.find(100));
console.log(b.find(3));
console.log(b.find(18));
console.log(b.find(6));
console.log(b.find(-1));
console.log(b.find(17));
console.log(b.find(7));
console.log(b.find(4));

console.log(b);