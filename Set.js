/* 
What is a set?

Def: Does not allow for a duplicate item.

Use: Check if there are duplicate items.


*/

function mySet() {
    // the var collection will hold the set
    const collection = [];
    // method will check for an element and return the T/F
    this.has = function(element) {
        // Returns True -> Finds an element in set (element is not -1 is a true statment)
        // Returns False -> Not in the set
        return (collection.indexOf(element) !== -1);
    } 
    // method will return all of the values in the collection
    this.values = function() {
        return collection;
    }
    // this method will add an element into the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        } else {
            return false;
        }
    }
    // this method will remove an element from the set
    this.remove = function (element) {
        if (this.has(element)){
            var index = collection.indexOf(element);
            collection.splice(index, 1);
        }
    }

    // find the size of a set
    this.size = function() {
        return collection.length;
    }
    // find the union of a set

    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values;
        var secondSet = otherSet.values();

        secondSet.forEach((e) => {
            unionSet.add(e);
        });

        secondSet.forEach((e) => {
            unionSet.add(e);
        });

        return unionSet;
    }

    // find the intersection of two sets and return a new set
    this.intersection = function(set1, set2) {
        var intersectSet = new Set();
        var set1 = set1.values();
        var set2 = set2.values();

        set1.forEach((e) => {
            if(set2.has(e)) {
                intersectSet.push(e);
            }
        });

        return intersectSet;
    }
}

var set1 = new mySet();
var set2 = new mySet();

var setter1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var setter2 = [2, 4, 6, 8, 10];
var intersectionOfSet = mySet.intersection(setter1, setter2);