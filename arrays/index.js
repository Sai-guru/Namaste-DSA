
// 26). TWO POINTERS
const removeDuplicates = function (a) {
    let x =0;
    for(let i=0;i<a.length;i++){
        if(a[i]>a[x]) {
            x+=1;
            a[x]=a[i];
        }
    }
   // return a.slice(0, x + 1); // this line is optional, it shows the modified array ,in leetcode it will not be used
    return x+1;
};
// console.log(removeDuplicates([0,1,1,2,2,3,4,4,5,5]));

// 27).TWO POINTERS
const removeElement = function(arr, val) {

    let x =0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!==val) {
            arr[x]=arr[i];   //if needed the non-duplicate array
            x+=1;
        }
    } 
    //console.log(arr.slice(0, x)); // this line is optional, it shows the modified array ,in leetcode it will not be used
    return x;
};

// console.log(removeElement([3,2,2,3,1,5,7,89,0],3))

// 344.REVERSE STRING
const reverseString = function(arr) {
    let n = arr.length;
    for(let i=0;i<Math.floor(n/2);i++) {
        let temp = arr[i];
        arr[i]=arr[n-(i+1)];
        arr[n-(i+1)] = temp;
    }
    return arr;
};
// var reverseString = function(arr){
//     return arr.reverse()
// }
// console.log(reverseString(['h','e','l','l','o']));

//121). BEST TIME TO BUY AND SELL STOCK
// Input: prices = [7,1,5,3,6,4]
// Output: 5
const maxProfit = (arr)=> {
    let min = arr[0];
    let maxP = 0;
    for(let i=1;i<arr.length;i++) {
        if(arr[i]<min) {
            min = arr[i];
        }
        let currProfit =  arr[i]-min;
        if(currProfit > maxP) {
            maxP = currProfit;
        }
    }return maxP;
}
// console.log(maxProfit([7,1,5,3,6,4]));

// 88. MERGE SORTED ARRAY
var merge = function(n1, m, n2, n) {
    
    // n1Copy = [...n1];
    // let p1 =0 , p2 = 0;
    // for(i=0;i<(m+n);i++) {
    //     if(p2>=n || (p1<m && n1Copy[p1]<n2[p2])){
    //         n1[i] = n1Copy[p1];
    //         p1++;
    //     }else {
    //         n1[i] = n2[p2];
    //         p2++
    //     }
    // }return n1;
    
    let p1 = m-1,p2 =n-1;
    for(let i=(m+n)-1;i>=0;i--) {
        if(p2<0) break;
        if(p1>=0 && (p2<0 || n1[p1]>n2[p2])){
            n1[i]= n1[p1];
            p1--;
        }else {
            n1[i]=n2[p2];
            p2--;
        }
    }return n1;
};
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));



// 283).MOVE ZEROES
const moveZeroes = (a)=> {
    let x =0;
    for(let i=0;i<a.length;i++) {
        if(a[i]!==0) {
            a[x] = a[i];
            x++;
        }
    }
    for(let i = x; i < a.length; i++) {
        a[i] = 0;
    }
    return a;
}
//  console.log(moveZeroes([0,1,0,3,12])); 

// 485. Max Consecutive Ones
var findMaxConsecutiveOnes = function(a) {
    let currCount =0;
    let maxCount = 0;
    for(let i=0;i<a.length;i++){
        if(a[i]===1) {
           currCount++;
           console.log(` iteration ${i} inside if block ,  & currCount is ${currCount}`);
        }
        else {
            // if(currCount >  maxCount) {
            //     maxCount = currCount;
            //     console.log(` iteration ${i} inside else block , & maxCount is ${maxCount}`); // }
            maxCount = Math.max(maxCount, currCount);
             console.log(` iteration ${i} inside else block , & maxCount is ${maxCount}`);
            currCount = 0;
        }
    }
    //  if (currCount > maxCount) {    //     maxCount = currCount // }
return Math.max(maxCount, currCount);
};
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));


// 268. MISSING NUMBER
var missingNumber = function(a) {
     let sumOfGivenArray = 0;
     let n = a.length;
    for(let i=0;i<n;i++) {
        sumOfGivenArray+= a[i];
    }
    let mySum = n*(n+1)/2;
    let res = mySum - sumOfGivenArray;
    return res;
};
// console.log(missingNumber([3,0,1]));

// 136. Single Number
var singleNumber = function(a) {
    let hash = {};
    for(let i=0;i<a.length;i++) {
        if(!hash[a[i]]) {
            hash[a[i]] = 1;
        } else {
            hash[a[i]]++;
        }
        console.log(`Iteration ${i}: hash =`, JSON.stringify(hash));
    }
    for(let i=0;i<a.length;i++) {
        if(hash[a[i]] == 1) {
            return a[i];
        }
    }
   
};
// console.log(singleNumber([4,1,2,1,2]));


// day 74-- after a liong time cmoing hrere...(20/04/2026)

// maximum sub array sum with given fixed k - window size..
//  https://youtu.be/-w3QwR9Ly4A?si=vufRh8IbF5Fjrwva

var maxSubArr = (arr,k) =>{

    let maxSum = winSum = 0;
    for(let i=0;i<k;i++) winSum+=arr[i];
      maxSum = winSum;

    for(let i=k;i<arr.length;i++) {
        winSum +=arr[i]-arr[i-k];
        maxSum = Math.max(maxSum, winSum);

    }
    return maxSum;
}
    

// console.log(maxSubArr([2,1,5,1,3,2,1,5],3));

// now maximum sub array sum without fixed k - window size.
// //so using kadane's algorithm here.

// https://youtu.be/1idc178w8AM?si=dTgJdDhB9JArLGuX
//leetcode 53. Maximum Subarray

//--------  3 rules for Kadane's algorithm:---------
// 1. Continue adding elements to the current sum.
// 2. If the current sum becomes negative, reset it to 0.
// 3 . Keep track of the maximum sum seen so far.

var maxSubArray = function(nums) {
    let currSum = 0;
    let maxSum = -Infinity;

    for(let num of nums){

        currSum +=num;
        maxSum = Math.max(currSum,maxSum)

        if(currSum<0) currSum = 0;
    } return maxSum;
    
};


