// sum of first n numbers (using recursion)

const sumOfFirst = (n) => {
  if (n == 0) return 0;

  return n + sumOfFirst(n - 1);
};
// console.log(sumOfFirst(5));

// using forloop now
const sumOfFirstForLoop = (n) => {
  if (n == 0) return 0; // handle negative input
  let sum = 0;
  // for(let i=0;i<=n;i++) {
  //     sum += i;
  // }
  // sum = (n * (n + 1)) / 2; // using formula for sum of first n natural numbers
  return sum;
};
// console.log(sumOfFirstForLoop(5));

// sum of all elements in an array (using recursion)

const sumOfAllElementsInAnArray = (n) => {
  if (n == 0) return arr[0]; 
  
  return arr[n] + sumOfAllElementsInAnArray(n - 1);
};
let arr = [1, 2, 3, 4, 5]; //if wanna take it as autoinput then use another outside function to take input ,
// then just return it
// console.log(sumOfAllElementsInAnArray(arr.length - 1));

//same above fucntion , but for odd elements in an array usin recursion
const sumOfAllOdd = (n) => {
  if (n == 0) return arr[0];

  if(arr[n]%2!==0) return arr1[n]+sumOfAllOdd(n - 1);
  else return sumOfAllOdd(n - 1);
};
let arr1 = [1, 2, 3, 4, 5];
// console.log(sumOfAllOdd(arr1.length - 1));


const factorial = (n)=> {
  if(n== 0 || n == 1) return 1;
  return n*factorial(n-1);
}
// console.log(factorial(5)); // 120

// Power of two using recursion
var isPowerOfTwo = function(n) {
    if(n==1) return true;
    if(n<=0 || n%2!==0) return false;

    //  let x = Math.log2(n);
     //  if(Math.pow(2, x) == n) return true;
    //  return Number.isInteger(x);
   
   
    return isPowerOfTwo(n/2);
};
console.log(isPowerOfTwo(80)); 

// fibonacci numbers using recursion
const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n < 0) return "Input should be a non-negative integer";

  return fibo(n - 1) + fibo(n - 2);
};
// console.log(fibo(9))


