"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} strings 
 * @returns {string[]}
 */
function longestString(strings) {
    let longestStrLen = 0;

    for (let str of strings) {
        if (str.length > longestStrLen) {
            longestStrLen = str.length;
        }
    }
    
    return strings.filter((str) => str.length === longestStrLen);
}

console.log( longestString(["a", "bb", "ccc", "ee", "f", "ggg"]) ); // ["ccc", "ggg"]
