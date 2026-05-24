// day 45 - 01/10/2025
// leetcode 49 - Group Anagrams
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//approach one - hash map with sorted string as key
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0; i<strs.length; i++){
        let sortedWord = strs[i].split('').sort().join('');

        if(map[sortedWord]) map[sortedWord].push(strs[i]);
        else map[sortedWord] = [strs[i]];
    }

    return Object.values(map);   //this single line or
    // let keys = Object.keys(map);
    // let res = [];
    // for(let i=0;i<keys.length;i++){
    //     res.push(map[keys[i]]);
    // }return res;

};
//time complexity - O(n * klogk) n is number of words, k is max length of word
//space complexity - O(n*m)

// approach 2 - only hashed key

var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0;i<strs.length;i++){
        // create a key stored in an arr
        let freqArr = Array(26).fill(0);  //[0,0,0,.....26th 0];
        let currS = strs[i];
        for(j=0;j<currS.length;j++) {
            let index  = currS[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index]++;
        }
        let key = '';
        for(let i=0;i<26;i++) {
            key+= String.fromCharCode(i)+freqArr[i];
        }
        if(!map[key]) map[key] = [currS];
        else map[key].push(currS);

    }
    return [...Object.values(map)];
};
