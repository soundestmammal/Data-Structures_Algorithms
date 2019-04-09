// Import the Queue DS
// const { Queue } = require('./Queue');

// Create an Adjacency Data Structure
const adjacencyDS = {
    a: {
        list: [
            {b: 7},
            {c: 3}
        ],
        parent: null,
        costFromStart = Infinity
    },
    b: {
        list: [
            {a: 7},
            {c: 1}
        ],
        parent: null,
        costFromStart = Infinity
    },
    c: {
        list: [
            {a: 3},
            {b: 1},
            {d: 2}
        ],
        parent: null,
        costFromStart = Infinity
    },
    d: {
        list: [
            {b: 2},
            {c: 2},
            {e: 4}  
        ],
        parent: null,
        costFromStart = Infinity
    },
    e: {
        list: [
            {b: 6},
            {d: 4}
        ],
        parent: null,
        costFromStart = Infinity
    }
}

// What arguments must be passed to the function?
/* 

1. The Adjacency Data Structure
2. Start
3. End

The Function must return:

1. The Distance from a -> b
2. The Path from a -> b

*/

var dijkstra = function(adjacencyDS, start, end) {
    // First thing destructure the ADS
    const { a, b, c, d, e } = adjacencyDS;

    // Change the cost for start node
    start.costFromStart = 0;

    // While loop for the whole algorithm
    // While the unvisted still has values in it
    const visted = [];
    const unvisited = [...adjacencyDS.Keys()];

    while (unvisited.length) {
        if (visited.length == 0) {
            let currentNode = start;
        } else {
            // I want to set the currentNode to minimum
            // I have a feeling this is bad
            // fix
            unvisited.filter(node => {
                var min = Infinity;
                if (node < min) {
                    min = node;
                }

                currentNode = min;
            })
            // Make sure this returns the minium (TEST)
        }

        visited.push(currentNode);

        const Queue = [];

        // Push the adjacent nodes into the queue to be visited
        currentNode.list.forEach(v => {
            Queue.push(v.Keys());
        });

        // Now the Queue has the elements that I need

        // The next step is going to be ....
        // I need to process the node

        while (Queue.length) {
            // Dequeue the adjacent node
            // 0(1)
            let currentEdge = Queue.shift();
            if (!(visited.find(currentEdge) == currentEdge)) {
                if ((currentEdge + costFromStart) < currentEdge.costFromStart) {
                    currentEdge.costFromStart = currentNode.currentEdge + costFromStart;
                }
            }
        }
    }

    // TDD
    // Go to the end and push the parent

    // go to the parent and push the parent ...

    const path = [...end];

    let currentParent = end.parent;

    while (currentParent) {
        path.push(currentParent);
        currentParent = currentParent.parent;
    }

    while(path.length) {
        path.pop();
    }





}

// pramp