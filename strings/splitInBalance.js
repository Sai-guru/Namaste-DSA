
// day 38 - 24/09/2025
// leetcode 1221 - Split a String in Balanced Strings
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:
// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4


/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let r = l = 0;
    let count = 0;
    
    for(let i=0;i<s.length;i++){
        if(s[i]=='R') r++;
        else l++;

        if(l==r){
            count++;
            l = r = 0;
        }   
    }return count;

};