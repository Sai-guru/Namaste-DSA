
// day 40 - 26/09/2025
// leetcode 125 - Valid Palindrome 
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
//  and removing all non-alphanumeric characters, it reads the same forward and backward. 
//  Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {


    //approach 1
    // s = s.toLowerCase();
    // let filteredStr = '';
    //    let revStr = '';
    // for(let i = 0; i < s.length; i++) {
    //     if(s[i].match(/[a-z0-9]/i)) {
    //         filteredStr+= s[i];
    //         revStr = s[i]+revStr;
    //     }
    // }
    // // let revStr = [...filteredStr].reverse().join(''); //without using reverse function

    // for(let i = filteredStr.length - 1; i >= 0; i--) {
    //     revStr+= filteredStr[i];
    // }
    // return filteredStr === revStr;

    //approach 2 - using two pointer technique
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while(i<j) {
        if(!s[i].match(/[a-z0-9]/i)) i++;
        else if(!s[j].match(/[a-z0-9]/i)) j--;
        else if(s[i] == s[j]) {
            i++;
            j--;
        }else return false;
    }
    return true;

}; 

