// day 50 - 06/10/2025
// leetcode 20 - valid parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.    
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //my approach  - ji approach also almost same just diff in if statemtnt as if(map[s[i]]) stack.push(s[i]);
    let stack = [];
    const map = { '(':')', '{':'}', '[':']' };
    for(let i=0; i<s.length; i++){
        let currSymbol = s[i];
        if(currSymbol == '(' || currSymbol == '{' || currSymbol == '['){
            stack.push(currSymbol);
        }else {
            if(stack.length == 0 || currSymbol != map[stack.pop()]) return false;
        }
    }
    return stack.length == 0;
    //time complexity O(n)
    //space complexity O(n)

};
console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([)]")); //false