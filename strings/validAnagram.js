// day 43 - 29/09/2025
// leetcode 242 - Valid Anagram 
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!==t.length) return false;
    // const sArr = [...s].sort();
    // const tArr = [...t].sort();
    // for(let i=0;i<sArr.length;i++) {
    //     if(sArr[i]!==tArr[i]) return false;
    // } return true;

    let sMap = {};
    let tMap = {};
    for(let i=0;i<s.length;i++) {
        if(!sMap[s[i]]) sMap[s[i]] =1;
        else sMap[s[i]]++;

        if(!tMap[t[i]]) tMap[t[i]] =1;
        else tMap[t[i]]++;
    }

    let keys = Object.keys(sMap);
    console.log(sMap,tMap);
    console.log(keys);
    for(let i=0;i<keys.length;i++) {
           console.log(sMap[keys[i]],tMap[keys[i]]);
        if(sMap[keys[i]]!==tMap[keys[i]]) return false;
    }
    return true;

};
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));


    
