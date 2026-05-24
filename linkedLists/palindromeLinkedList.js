
//worst approach
var isPalindromeLinkedList = (head)=> {
    let curr = head;
    let arr = [];
    while(curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    // let newArr = [...arr].reverse();    or use for loop
    let newArr = [...arr];
    // for(let i=0;i<Math.floor(newArr.length/2);i++) {
    //     let temp = newArr[i];
    //     newArr[i] = newArr[newArr.length-1-i];
    //     newArr[newArr.length-1-i] = temp;
    // }

    return arr.join()===newArr.join();
}


// var myArr = ["1","9","2","1"];
// // console.log(myArr.reverse());   //to reverse a number arr and return as number itself use toReversed() 
// console.log(typeof myArr.reverse());


//best approach 

var isPalindromeLinkedList = (head)=> {

    //find mid node/element and be there 
    let slow =  fast =  head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //Now   slow is our mid point , standing at mid


    //reverse the 2nd half of the linked list
    let prev = null;
    let curr = slow;

    while(curr) {
        let temp  = curr.next;
        curr.next = prev;
        prev = curr;
        curr =  temp;
    }
    //Now prev is the end of whole the linked list or also can tell as head of 2nd half reversed ll

    //now compare the start of ll and start of 2nd half reversed ll

    let firstll = head;
    let secondll = prev;

    while(secondll) {

        if(firstll.val != secondll.val) return false;

        firstll = firstll.next;
        secondll = secondll.next;
    }return true;
}