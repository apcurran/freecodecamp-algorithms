"use strict";

/**
 * Solution 1
 * 
 * n = keys.length
 * m = vals.length
 * 
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} keys 
 * @param {string[]} vals 
 * @returns {object}
 */
function arrToObj(keys, vals) {
    let resObj = {};

    for (let i = 0; i < keys.length; i++) {
        const currKey = keys[i];
        const currVal = vals[i];
        resObj[currKey] = currVal;
    }

    return resObj;
}

console.log( arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]) ); // { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }
console.log( arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"]) ); // { 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }
