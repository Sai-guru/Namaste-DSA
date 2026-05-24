// day 41 - 27/09/2025
// leetcode 1903 - Largest Odd Number in String
// You are given a string num, representing a large integer.
// Return the largest-valued odd integer (as a string) that is a non-empty substring of num,
// or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.
// Example 1:
// Input: num = "52"
// Output: "5"

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {

    for(let i=num.length - 1; i >= 0; i--) {
        if(Number(num[i]) % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
    
};