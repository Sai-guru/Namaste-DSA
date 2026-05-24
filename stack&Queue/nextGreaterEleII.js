// day 58 - 14/10/2025
// leetcode 503 - next greater element II
// Given a circular array (the next element of the last element is the first element of the array), 
// print the Next Greater Number for every element. The Next Greater Number of a number x is
//  the first greater number to its traversing-order next in the array, which means you could search
//  circularly to find its next greater number. If it doesn't exist, output -1 for this number.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let n = nums.length;
    let res = [];
    
    for(let i=2*n-1;i>=0;i--) {
         let currVal = nums[i%n];
         while(stack.length && currVal>=stack[stack.length-1]) {
               stack.pop();
            }
            if(i<n) res.push(stack.length ? stack[stack.length-1] : -1);
            

            stack.push(currVal);
    }return res.reverse();
};


