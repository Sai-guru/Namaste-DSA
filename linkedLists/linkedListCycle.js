// 141. Linked List Cycle


var hasCycle = function(head) {
    let curr =head;
    var set = new Set();
    while(curr) {
        if(set.has(curr)) return true;
        set.add(curr);
        curr = curr.next;
    }
    return false; 
};


// Floyds Cycle Detection Algorithm

var hasCycleFloyds = function(head) {
    if(!head) return false;

    let slow = head;
    let fast =  head.next;

    while(slow!=fast) {
         if(fast == null || fast.next == null) return false;

         slow = slow.next;
         fast =  fast.next.next;
    }return true;
}