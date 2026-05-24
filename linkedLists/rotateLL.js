// day 32 - 18/09/2025
// leetcode 61 Rotate List
// Given the head of a linked list, rotate the list to the right by k places.
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]


var rotateRight = function(head, k) {
      
     if(!head || !head.next) return head;

     // first get the length(size);

     let length = 0;
     let curr =  head;
        while(curr){
            length++;
            curr = curr.next;
        }
     k = k%length;

//our known logic code ...
     let fast =  slow = head;
     for(let i=0;i<k;i++) {
        fast = fast.next;
     }

     while(fast.next){
        fast = fast.next;
        slow = slow.next;
     }

     fast.next = head;
     let newHead = slow.next;
     slow.next = null;

   return newHead;
}