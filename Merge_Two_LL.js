/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    var currentOne = l1;
    var currentTwo = l2;
    var answer;
    while (currentOne !== null || currentTwo !== null) {
        console.log(currentOne.val);
        console.log(answer)
        // console.log(currentTwo.val);
        if (currentOne.val <= currentTwo.val) {
            if (answer == undefined) {
                answer = new ListNode(currentOne.val);
                currentOne = currentOne.next;
                answer = answer.next;
                console.log("Do I get here", currentOne);
                console.log("This should be: 1", answer);
            } else {
            answer.val = new ListNode(currentOne.val);
            answer = answer.next;
            currentOne = currentOne.next;
            }
        } else {
            if (answer == undefined) {
                answer.val = new ListNode(currentTwo.val);
                answer = answer.next;
                currentTwo = currentTwo.next;
            } else {
            answer.val = new ListNode(currentTwo.val);
            answer = answer.next;
            currentTwo = currentTwo.next;
            }
        }    
    }
};