/* 

    206. Reverse Linked List / Easy

    Given the head of a singly linked list, reverse the list, and return the reversed list.

    Example 1:
        https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg
        Input: head = [1,2,3,4,5]
        Output: [5,4,3,2,1]
    Example 2:
        https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg
        Input: head = [1,2]
        Output: [2,1]
    Example 3:
        Input: head = []
        Output: []    
    

    Constraints:
        The number of nodes in the list is the range [0, 5000].
        -5000 <= Node.val <= 5000
 

    Follow up: 
        A linked list can be reversed either iteratively or recursively. Could you implement both?
        
*/

/*
    SOLUTION 1 WHILELOOP
    PROS - EVALUATION
    PROS - EVALUATION
    EVALUATION / Memory
        Runtime: 118 ms, faster than 16.64% of JavaScript online submissions for Reverse Linked List.
        Memory Usage: 44.4 MB, less than 44.09% of JavaScript online submissions for Reverse Linked List.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let nodes = head
    var previous = null
    while (nodes) {
        // save next or you lose it!!!
        var save = nodes.next

        // reverse pointer
        nodes.next = previous

        // increment previous to current node
        previous = nodes

        // increment node to next node or null at end of list
        nodes = save
    }
    head = previous
    return head
};

/*
    SOLUTION 2 HASHMAP
    CONS - MEMORY
    CONS - MEMORY
    EVALUATION / Memory
        Runtime: 78 ms, faster than 99.00% of JavaScript online submissions for Contains Duplicate.
        Memory Usage: 51.2 MB, less than 35.61% of JavaScript online submissions for Contains Duplicate.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListRecursice = function (head) {

};