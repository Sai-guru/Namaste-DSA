//solution 1

const countDigits = (n)=> {
    // return n.toString().split('').length;
    return Math.abs(n).toString().split('').length;
}
// console.log(countDigits(2342432240));
//solution 1 code 2

const sol2ForQ1 = (n)=> {
    if(n==0) return 1;
    let c = 0;
    while (n>0) {
      n = Math.floor(n/10);
      c++;
    }
    return c;
}
// console.log(sol2ForQ1(2342432240));


//solution 2
const addDigits = (n) => {
    let sum = 0;
    let numToStr = n.toString();
    // console.log(typeof numToStr);
    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }
    return sum;
}
// console.log(addDigits(20345));


//solution 3
// without using string concept 

var isPalindrome = function(n) {
    let rev = 0;
    let copyOfn = n

    if(n<0) return false;
    while(copyOfn>0) {
        let rem = copyOfn%10;
        rev = (10*rev)+rem;
        copyOfn =Math.floor(copyOfn/10);
    }
    return rev===n;
}
// console.log(isPalindrome(212));

// using string concept 
const isPalindrome2 = (n) => {
    let rev = n.toString().split('').reverse().join('');
    return rev === n.toString();
}
// console.log(isPalindrome2('mam'));
// console.log(isPalindrome2(121));


//solution 4
const reverseInteger = (n) => {
    // let nCopy = n;
    let rev = 0;
    n = Math.abs(n); // to handle negative numbers

    while(n>0) {
        let rem = n%10;
        rev = (10*rev)+rem;
        n = Math.floor(n/10);
    }
    return (rev<0) ? -1*rev : rev;
}
 console.log(reverseInteger(120));