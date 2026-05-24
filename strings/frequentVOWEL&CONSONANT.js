
// day 37 - 23/09/2025
// leetcode 3541  - Find Most Frequent Vowel and Consonant

// You are given a string s consisting of lowercase English letters ('a' to 'z').
// Your task is to:
// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};

    for(let i=0;i<s.length;i++){
        if(!map[s[i]]) map[s[i]] = 1; 
        else  map[s[i]]++;
    }
    let vowels = ['a','e','i','o','u'];
    let maxV = 0 ;
    let maxC = 0 ;
    let mapKeys = Object.keys(map);
    console.log(map);
    console.log(mapKeys);

    // for(let i=0;i<s.length;i++) {
        // if(vowels.includes(s[i])) {
        //     if(map[s[i]] > maxV) maxV = map[s[i]];
        // }else {
        //     if(map[s[i]] > maxC) maxC = map[s[i]];
        // }
//         if(vowels.includes(s[i])) {
//             maxV = Math.max(maxV, map[s[i]]);
//         }else {
//             maxC = Math.max(maxC, map[s[i]]);
//         }
    // }
    for(let i=0;i<mapKeys.length;i++) {
        if(vowels.includes(mapKeys[i])) {
            maxV = Math.max(maxV, map[mapKeys[i]]);
        }else {
            maxC = Math.max(maxC, map[mapKeys[i]]);
        }
    }
    return maxV + maxC;
};

console.log(maxFreqSum("successes")); //answer is 6;