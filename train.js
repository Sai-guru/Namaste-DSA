

// Master Template
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim();
// console.log("op is + ",input);


//Number 
// const fs = require('fs');
// const input = fs.readFileSync(0,'utf-8').trim();
// const n = Number(input);

// console.log('Number op is ',n);

// String
// const fs = require('fs');
// const ip = fs.readFileSync(0,'utf-8').trim();
// console.log("String op is + ",ip);

// ARRAY OF NUMBERS
// const fs = require('fs');
// const ip = fs.readFileSync(0,'utf-8').trim();

// // const arr = ip.split(' ').map(Number);
// // split by one or more spaces
// const arr = ip.split(/\s+/).map(Number);
// console.log(arr);

// ARRAY OF STRINGS
// const fs = require('fs');
// const ip = fs.readFileSync(0,'utf-8').trim();
// const arrStr = ip.split('');
// console.log(arrStr);


// multi line input..

// eg : 
// 5    - size
// 1 2 3 4 5  - arrray

// const fs = require('fs');
// const ip = fs.readFileSync(0,'utf-8').trim();

// const lines = ip.split('\n');
// const n = Number(lines[0]);
// const arr = lines[1].split(' ').map(Number);

// // console.log(`size is ${n} and arr is ${arr}`)
// let sum = 0;
// for(let i=0;i<n;i++) sum+=arr[i];
// console.log(sum)

// eg:
// prigeesh
// 24
// chennai

const fs = require('fs')
const ip = fs.readFileSync(0,'utf-8').trim();
const lines = ip.split('\n');

const fl = lines[0];
const sl = Number(lines[1]); //number bcos ip default is str , so to get as num , ..
const tl = lines[2];

console.log(`name : ${fl} ,age : ${sl} and place : ${tl} `);

// both js and java : 
//  https://chatgpt.com/share/6a129971-0118-83e9-98a0-bf2d0f14edbc