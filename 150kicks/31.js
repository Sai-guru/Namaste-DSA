// 31. Problem to check whether all the numbers are arranged in ascending order
//  Input-1 = 4567
//  Output: Yes
//  Input-2 = 4576
// Output: No

const fs = require('fs');
const ip = fs.readFileSync(0,'utf-8').trim();


    let n = ip.split('');

    for(let i=0;i<n.length;i++){

        if(Number(n[i])>Number(n[i+1])){
            console.log(false);
            return false; 

        } 

    }
    console.log(true);
    return true;

