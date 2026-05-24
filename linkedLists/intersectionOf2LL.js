// leetcode 160 - Intersection of Two Linked Lists

// Given the heads of two singly linked-lists headA and headB,
//  return the node at which the two lists intersect. 
//  If the two linked lists have no intersection at all, return null.


var getIntersectionNode = function(headA, headB) {

    if (!headA || !headB) return null;

     let set = new Set();
    while(headB) {
         set.add(headB);
        headB = headB.next;
    }
    while(headA) {
        if(set.has(headA)) {
            return headA;
        }
        headA = headA.next;
        
    }return null;
}