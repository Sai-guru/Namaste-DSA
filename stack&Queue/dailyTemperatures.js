// day 57 - 13/10/2025
// leetcode 739 - daily temperatures
// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have to wait 
// after the ith day to get a warmer temperature. 
// If there is no future day for which this is possible, keep answer[i] == 0 instead.


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    let stack = [];
    let n = arr.length;
    let res = Array(n).fill(0);
    stack.push(n-1);

    for(let i=n-2; i>=0; i--){
        while(stack.length) {
            let top = stack[stack.length-1];
             if(arr[i]<arr[top]){
                res[i] = top - i;
                break;
            }else stack.pop();
        }stack.push(i);
    }return res;
};