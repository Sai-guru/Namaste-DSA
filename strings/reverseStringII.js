//day 39 - 25/09/2025
// leetcode 541 - Reverse String II
// Given a string s and an integer k,
// reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and leave the other as original.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split('');
    for(let x=0;x<s.length;x+=(2*k)) {
        let n = k;
        let mid = Math.floor(n/2);
        for(let i=0;i<mid;i++) {
            let temp = s[x+i];
            s[x+i] = s[x+n-(i+1)];
            s[x+n-(i+1)] = temp;
        }
    }
    return s.join('');
};

console.log(reverseStr("abcdefg", 2)) // "bacdfeg"
console.log(reverseStr("abcd", 3)) // "cbad"
