LinkedList() {
    var length = 0;
    var head = null;

    var node = function(element) {
        this.element = element;
        this.next = null;
    }

    this.size = function() {
        return length;
    }

    this.head = function() {
        return head;
    }

    this.add = function(element) {
        node = new node(element);
        if (head===null) {
            head = node;
        } else {
            currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
        currentNode.next = node;
        }
    length++;    
    }

    // Finding an element in a linked list structure
    // Start at the head and traverse the list one node at a time

    // We have two nodes of interest at ech iteration
    // 1. We have the element that we are searching for.
    // 2. We have the current element/node of the list. 

    // Initially we set the current element to be the head pointer.
    // We want to continue to traverse the linked list:
    // While we haven't found it ... traverse ...
    // But! if the current.next, that means that we have reached the end of the list
    // Which means that the element was not found and I will return false
    // When we find the element (AKA the while loop breaks), we will return True

    this.find = function(element) {
        node = element;
        current = head;
        while (current !== element) {
            current = current.next;
            if (current.next === null) {
                return false;
            }
        }
        return true
    }

    this.print = function() {
        current = head;
        while (current.next !== null) {
            console.log(current);
        }
    }
}

LinkedList.add(3);
LinkedList.add(1);
LinkedList.add(88);
LinkedList.add(65);
LinkedList.add(50);



console.log(LinkedList.find())