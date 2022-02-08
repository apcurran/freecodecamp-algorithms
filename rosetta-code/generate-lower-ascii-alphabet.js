"use strict";

/**
 * Solution 1
 * 
 * n = cFrom.charCodeAt(0)
 * m = cTo.charCodeAt(0)
 * 
 * time: O(m - n)
 * space: O(m - n)
 * 
 * @param {string} cFrom 
 * @param {string} cTo 
 * @returns {string[]}
 */
function lascii(cFrom, cTo) {
    const startCodeNum = cFrom.charCodeAt(0);
    const endCodeNum = cTo.charCodeAt(0);
    let resStrArr = [];

    for (let i = startCodeNum; i <= endCodeNum; i++) {
        const currChar = String.fromCharCode(i);
        resStrArr.push(currChar);
    }

    return resStrArr;
}

console.log(lascii("a", "d")); // [ 'a', 'b', 'c', 'd' ]
console.log(lascii("c", "i")); // [ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]
