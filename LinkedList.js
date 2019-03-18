function LinkedList() {
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
}