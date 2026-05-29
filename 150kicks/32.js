// 32. Stepping Number or Not
// Neighbor number difference can be either -1 or 1
//  Input-1 = 12345
//  Output: Yes
//  Input-2 = 1245

const fs = require('fs');
const ip = fs.readFileSync(0,'utf-8').trim();

for(let i=0;i<ip.length;i++){
    let curr = Number(ip[i]);
    let next = Number(ip[i+1]);

    let diff = Math.abs(curr-next);
    if(diff != 1) {
        console.log(false);
        return;
    }
}
console.log(true);
return;