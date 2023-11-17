/* Question Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/ */

/* Difficulty: Medium */

/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

*/

/* Runtime: 50 ms and beats 79% with JavaScript 
   Space: 42.8 MB and beats 58% with JavaScript */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let count = 0, headPointer = head;

    while(headPointer)
    {
        headPointer = headPointer.next;
        count = count + 1;
    }

    if(count == 0) return head;

    if(count >= 1)
    {
        let index = count - n - 1;
        let headPointer = head;

        if(index == -1) head = headPointer.next;

        while(index > 0)
        {
            headPointer = headPointer.next;
            index--;
        }

        (headPointer.next) ? headPointer.next = headPointer.next.next : head = null;
    }
    return head;
};