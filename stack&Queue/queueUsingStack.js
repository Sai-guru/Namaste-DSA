// day 49 - 05/10/2025
// leetcode 232 - implement queue using stacks
// Implement a first in first out (FIFO) queue using only two stacks.
//  The implemented queue should support all the functions
//   of a normal queue (push, pop, peek, and empty).


// worst case time complexity - O(n)
// average time complexity - O(1)

var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // let n = this.s1.length;
    // for(let i=0;i<n-1;i++) {
    //     this.s2.push(this.s1.pop());
    // }
    // let ans =  this.s1.pop();

    // let m = this.s2.length;
    // for(let i=0;i<m;i++) {
    //     this.s1.push(this.s2.pop());
    // }
    // return ans;
    if(this.s2.length == 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop())
        }
    } return this.s2.pop();
};
/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    //  let n = this.s1.length;
    // for(let i=0;i<n-1;i++) {
    //    this.s2.push(this.s1.pop());
    // }
    // let ans =  this.s1[this.s1.length-1];
    // this.s2.push(this.s1.pop());

    //  let m = this.s2.length;
    // for(let i=0;i<m;i++) {
    //     this.s1.push(this.s2.pop());
    // }
    // return ans;
    if(this.s2.length == 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop())
        }
    } return this.s2[this.s2.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length ===0 ;
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

