// Write a program to print all even numbers from an array.
const findEven = ()=> {
let arr = [10, 3, 5, 2, 7, 6, 9];

for (let i=0;i<arr.length;i++) {
    if(arr[i]%2==0) console.log(arr[i]);
}
}
// findEven();

// Write a function that returns the number of negative numbers in an array.
const countNegative = (arr)=> {
    let count =0;
    // let arr = [2, -6, 4, 8, 1, -9];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0) count++ ;
    }
    return count;
}
// let res = countNegative([2, -6, 4, 8, 1, -9])
// console.log(res);

// Write a function that returns the smallest number in an array.
const smallestNum = (arr)=> {
    let smallest = Infinity;
    for(i=0;i<arr.length;i++){
        if(arr[i]<smallest)  smallest=arr[i];
    }return smallest;
}
// let res = smallestNum([2, -6, 4, 8, 1, -9])
// console.log(res);

const largestNum = (arr)=> {
    // let largest = -Infinity;
    // for(let i=0;i<arr.length;i++) {
    //        if(arr[i]>largest)  largest=arr[i];
    // }return largest;
    let max = arr[0];
    for( let i=1;i<arr.length;i++) {
        if(arr[i]>max) max = arr[i];
    }
    return max;
}
// let res = largestNum([2, -6, 4, 8, 1, -9]);
// console.log(res)

const find2ndLargest = (arr)=> {
    if(arr.length<2) return null; // if no.of.ele is less than 2 , then do this corner case
    let firstL  = -Infinity, secondL = -Infinity;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]>firstL) {
            secondL = firstL; //lost man second
            firstL = arr[i];  //won man first
        }else if(arr[i]>secondL && arr[i]!=firstL) {
            secondL = arr[i];
        }
    }return secondL;
}
// console.log(find2ndLargest([0, 3, 5, 2, 7, 9]));
// console.log(find2ndLargest([9,9,8,0,7,15,67,99,0]));

const justRun = ()=> {
    for(let i=0;i<3;i++) {
        for(let j=i;j>0;j--) {
            console.log(`i is ${i} and j is ${j}`);
        }
    }
}
// justRun()
const justRunit = ()=> {
    for(let i=5;i>0;i--) {
        for(let j=0;j<i;j++) {
            console.log(`i is ${i} and j is ${j}`);
        }
    }
}
// justRunit()

