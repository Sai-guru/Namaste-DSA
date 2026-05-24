// day 31 - 17/09/2025
// leetcode 21 Merge Two Sorted Lists
// You are given the heads of two sorted linked lists l1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.


// approach 1 :  do without dummy Node

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsNoDummy = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;    
 
    let curr = null;

    if(l1.val < l2.val) {
        curr =  l1;
        l1 = l1.next;
    }else { 
        curr = l2;
        l2 = l2.next;
    }
      let start =  curr;
    while(l1 && l2){
         if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
            curr = curr.next;
         }else{
            curr.next = l2;
            l2 = l2.next;
            curr = curr.next;
         }
    }
     if(!l1) curr.next = l2;
     if(!l2) curr.next = l1;
    
    return start;
};

var mergeTwoLists = function(l1, l2) {

    let dummyNode = new ListNode();
    let curr = dummyNode;

    while(l1 && l2){
        if(l1.val<l2.val) {
            curr.next = l1;
            l1 = l1.next;
            curr = curr.next;
        }else{
            curr.next = l2;
            l2 = l2.next;
            curr = curr.next;
        }
    }
    if(!l1) curr.next = l2;
    if(!l2) curr.next = l1;

    return dummyNode.next;
}