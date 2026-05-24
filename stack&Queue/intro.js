// day 46 
// Intro to Stack and Queues


console.log(`=======Stack==================`);
let stack = [];
//operations are push and pop

// push means add element at the top of stack
stack.push(1);
stack.push(4,3);
console.log("after push stack:", stack); // [1,4,3]

// --invalid operation--
console.log(stack[1]); // 4 - never do this , if did then it is not stack anymore but an array

// pop means remove element from the top of stack
let val = stack.pop();
console.log("after pop stack:", stack); // [1,4]
console.log("popped value:", val); // 3
console.log("final stack:", stack); // [1,4]


// peek means get the top element of stack
let top = stack[stack.length - 1];
console.log("peek top:", top);


console.log(`=======Queue==================`);

let queue = [];
// operations are enqueue and dequeue

// enqueue means add element at the end of queue
queue.push(1);
queue.push(4,3);
console.log("after enqueue queue:", queue); // [1,4,3]

// dequeue means remove element from the front of queue

console.log(queue.shift());  // 1
console.log("after dequeue queue using shift :", queue); // [4,3]

// queue.pop() ; //never do this , if did then it is not queue anymore but an array
// peek means get the front element of queue
let first = queue[0];
console.log("peek front:", first); // 4