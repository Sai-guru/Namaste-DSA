//LEETCODE 876. Middle of the Linked List
//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.

//less good approach
function middleNode(head) {
    const nodes = [];
    let curr = head;

    // store all nodes in an array
    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }

    // return the middle node (second middle if even length)
    return nodes[Math.floor(nodes.length / 2)];
}


//best approach 
// Slow and Fast pointer approach
var middleNode = (head)=> {
    // let fast =  head;
    // let slow =  head;
    let slow =  fast = head;

    // while(fast!=null  && fast.next!=null) {
         while(fast&& fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
             return slow;

}


console.log("how are you my dear")