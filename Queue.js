// How to Create a Queue in Javascript?
// A queue is a Last in, First Out data structure. (LIFO);
// A queue supports a few operations:

/*
* isEmpty- Determines whether the queue is empty
* front - Returns the front - front element in the queue
* back - returns the last element of the queue.
* enqueue = Adds a new element to the rear of the queue.
* dequeue - Removes the front element from the queue.
* size - Returns the size of the queue (less standard)

Can be implemented with an array and a linked list.
*/

// Array implementation

function Queue() {
    this.size = 0;
    this.storage = [];
}

Queue.prototype.isEmpty = function() {
    if(this.size == 0) {
        return true;
    } else {
        return false;
    }
}

Queue.prototype.front = function() {
    if(this.size !== 0) {
        return this.storage[0]
    } else {
        return false;
        console.log("Queue Front Error: Cannot call front on an empty Queue");
    }
}

Queue.prototype.end = function() {
    if (this.size !== 0) {
        return this.storage[this.storage.length -1]
    } else {
        return false;
        console.log("Queue End Error: Can not call End on an empty Queue.");
    }
}

Queue.prototype.enqueue = function(val) {
    this.storage.push(val);
    this.size++;
}

Queue.prototype.dequeue = function () {
    if (this.size !== 0) {
        this.size--;
        return this.storage.shift();
    } else {
        return false;
        console.log("Dequeue Error: The Queue is Empty");
    }
}

Queue.prototype.queue_size = function() {
    return this.size;
}

var Q = new Queue();
Q.enqueue(3);
Q.enqueue(1);
Q.enqueue(4);
Q.enqueue(1);
Q.enqueue(5);
Q.enqueue(9);
console.log(Q.queue_size()); // Should be 6
console.log(Q.isEmpty()); // Should return False
console.log(Q.front()); // Should return 3
console.log(Q.end()); // should return 9
console.log(Q.dequeue()); // should return 3
console.log(Q.dequeue()); // should return 1
console.log(Q.dequeue()); // should return 4
console.log(Q.front()); // should return 1
console.log(Q.end()); // should return 9
console.log(Q.isEmpty()); // shoudl return false
console.log(Q.dequeue()); // should return 1
console.log(Q.dequeue()); // should return 5
console.log(Q.dequeue()); // should return 9
console.log(Q.isEmpty()); // Should return true
console.log(Q.front()); // shoud return false/ error
console.log(Q.end()); // should return false / error
console.log(Q.dequeue()); // shoudl return false/ error




