// leetcode 58. Length of Last Word 
// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // s = s.trim().split(" ");
    // let res = s[s.length-1].length;

    // return res;

    //real approach...

    let n =  s.length-1;

    while(n>=0){
        if(s[n] == " ") n--;
        else break;
    }

    let count = 0;
    while(n>=0) {
        if(s[n] != " ") {
            count++;
            n--;
        }else break;
    }
    return count;
};
// console.log(lengthOfLastWord("Hello World")); //5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
// console.log(lengthOfLastWord("luffy is still joyboy")); //6