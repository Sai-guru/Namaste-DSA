// day  47 - 03/10/2025  and   day48 - 04/10/2025
// leetcode 225 - implement stack using queues 
//but with one queue itself

    
var MyStack = function() {
    this.q1 = [];  
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i=0;i<n-1;i++) {
        this.q1.push(this.q1.shift());
    } 
    return this.q1.shift();
   
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i=0;i<n-1;i++) {
        this.q1.push(this.q1.shift());
    }
    let top = this.q1[0];
    this.q1.push(top);
    this.q1.shift();
    return top;
    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length == 0;
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
