/*

Hash Table: 

Time Complexity:
    1) Search O(1)
    2) Insert O(1)
    3) Delete O(1)

Hash Function must be consistent
It should map different to different numbers.

If two strings are mapped to the same number/index in the array
thisis a collision.

We can chain the collision in the same index. Save both in the bucket.

Most languages already have hash tables implemented 

*/

var hash = (string, max) => {
    var hash = 0;
    for(var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    // Divide by number of buckets, and return the remainder.
    return hash % max;
}

let HashTable = function () {
    let storage = [];
    // Number of buckets in the array
    const storageLimit = 4;

    // Utility function to log all in storage
    this.print = function() {
        console.log(storage);
    }

    // First real method
    this.add = function(key, value) {
        // Find the index (the bucket)
        var index = hash(key, storageLimit);
        // If the bucket is empty
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
            // If the bucket was not empty
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                } else {
                    if (!inserted) {
                        // if it hasn't been inserted then I need to insert it here!
                    }
                }
            }
            
        }
    }
}