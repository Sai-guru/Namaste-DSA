// leetcode 203 - Remove Linked List Elements
// Given the head of a linked list and an integer val,
//  remove all the nodes of the linked list that has Node.val == val, and return the new head.
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]



// var removeElements = function(head, val) {
//     let senti = new ListNode();
//     senti.next = head ;

//     let prev = senti ;
// let curr = head;

// while(curr) {
//     if(curr.val==val) {
//         prev.next = prev.next.next;
//         curr = curr.next;
//     } else {
//         // prev = curr;   or 
//         prev = prev.next;
//         curr = curr.next;
//     }
// }
// return senti.next;
// }


var removeElements = function(head, val) {

    let senti = new ListNode();
    senti.next = head;
    let prev =  senti;
   
    while(prev && prev.next) {
        if(prev.next.val==val) {
            prev.next = prev.next.next;
        
        }else {
            prev = prev.next;
          
        }
    }return senti.next;
    
};



// leetcode 19 - Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEndMyOwnApproach = function(head, n) {
    let size = 0;
    let curr =  head;
    while(curr) {
        size++ ;
        curr =  curr.next;
    }
    if(n==size) return head.next;

    curr =  head;
    // for(let i=0;i<size-n;i++) {
        for(let i=0;i<size-(n+1);i++) {
        curr =  curr.next;
    }
    curr.next = curr.next.next;
    return head;
};


var removeNthFromEnd = function(head, n) {
    let senti = new ListNode();
    senti.next = head;

    let first =  senti;
    let second =  senti;

    for(let i=0;i<=n;i++){
        first = first.next;
    }
    while(first) {
        first =  first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return senti.next;

}



