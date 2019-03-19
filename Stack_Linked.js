/* 
A Stack is a Data Structure that supports Last In, First Out (LIFO).

LIFO implies that the last item in the stack is the first removed.

Stacks support Four operations:
    1) Push - Adds data to the stack.
    2) Pop - Removes data from the stack.
    3) Peak - Returns data that is at the "top" of the stack.
    4) Size - Returns the current size of the stack. (How many elements are in the stack)

Complexity of a Stack:
    Space Complexity - The memory needed for a stack grows linearly with the number of elements in the stack.

    Time Complexity -
        1) Push - O(1) Add the data to the end of the object, therefore other objects need not be moved. (in ref to array implementation)
        2) Pop - 0(1) Removing the data on the top of the stack does not depend on the size of the stack.
        3) Peak - 0(1) Returning the data that is on the top of the stack does not depend on the size of the stack.
        4) Size - 0(1) We will keep track of the current size in a variable. Reading a number is constant time.

An example of a stack in the physical world is a stack of dishes.

A simplifying assumption:
1) Plates are firmly stacked on a table.
2) Plates can only be added/removed from the top.

LIFO implies that the last dish placed on the stack of dishes, must be the first dish removed.

An example of a stack in the digital world is the call stack.

The call stack is a data structure that manages the order of function subroutines.

*/

var Stack = function() {

    this.count = 0;
    this.storage = {};

    // Push
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Peak
    this.peak = function() {
        if(this.count === 0) {
            return undefined;
        } else {
            return this.storage[this.count-1];
        }
    }
    
    // Pop
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        } else {
            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }
    }

    // Size
    this.size = function() {
        return this.count;
    }
}

const stack = new Stack();

stack.push(3);
stack.push(14);
console.log(stack.storage);
console.log(stack.peak());

console.log(stack.size());

console.log(stack.pop());
console.log(stack.size());

console.log(stack.peak());