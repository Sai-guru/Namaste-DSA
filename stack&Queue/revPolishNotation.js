// day 54 - 10/10/2025
// leetcode 150 - evaluate reverse polish notation
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// It is guaranteed that the given RPN expression is always valid. 
// That means the expression would always evaluate to a result, and there will not be any division by zero.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let map = { '+': (a,b)=> (b+a), '-': (a,b)=> (b-a), '*': (a,b)=> (b*a), '/': (a,b)=> Math.trunc(b/a) };
    for(let i=0;i<tokens.length;i++){
        if(map[tokens[i]]){
            let a =stack.pop();
            let b = stack.pop();
            let res = map[tokens[i]](a,b);
            stack.push(res);
    }else stack.push(Number(tokens[i]));
}
    return Number(stack.pop());
};
