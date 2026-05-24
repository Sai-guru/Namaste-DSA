// day 36 - 22/09/2025
// leetcode 771 - Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have.
//  Each character in stones is a type of stone you have. 
// You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, 
// so "a" is considered a different type of stone from "A".


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // jewels = jewels.split('');
    // stones = stones.split('');
    // // console.log(jewels, stones);

    // let count = 0;
    // for(let i=0; i<stones.length; i++){
    //     for(let j=0; j<jewels.length; j++){
    //         if(stones[i] === jewels[j]) count++;
    //     }
    //     // if(jewels.includes(stones[i])) count++;
    // }return count;

   let count = 0;
   let jewelsSet = new Set(jewels);
   console.log(jewelsSet);
   stones = stones.split('');
   for(let i=0;i<stones.length;i++){
    if(jewelsSet.has(stones[i])) count++;
   }
   return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb")) // 3