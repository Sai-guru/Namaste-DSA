// day 44 - 30/09/2025
// leetcode 205 - Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

  var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    
    let mapS  = {};
    let mapT = {};
    for(let i = 0; i < s.length; i++){
        if(!mapS[s[i]] && !mapT[t[i]]){
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
        }
        else if(mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false;
    }
    return true;
}
console.log(isIsomorphic("egg", "add")); // true