// day 35 - 21/09/2025
// leetcode 2942. Find Words Containing Character
// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.


/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {

    let res = [];
    for(let i=0; i<words.length; i++){
        // if(words[i].includes(x))  res.push(i);
        let singleWord = words[i];
        for(let j=0;j<singleWord.length;j++){
            if(singleWord[j] === x) {
                res.push(i);
                break;
            }
        }
    } return res;
};