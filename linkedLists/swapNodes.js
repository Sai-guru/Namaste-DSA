//day 33 - 19/09/2025
// leetcode 24 - Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

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
var swapPairs = function(head) {

    let dummyNode = new ListNode();
    dummyNode.next = head;
    let curr = dummyNode;

    while(curr.next && curr.next.next){
        let first = curr.next;
        let second = curr.next.next;
        let temp = second.next;

        curr.next = second;
        second.next = first;
        first.next = temp;

        curr = first;
    }
    return dummyNode.next;
}