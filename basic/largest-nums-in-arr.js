"use strict";

/**
 * @param {array} arr 
 * @returns {number[]}
 */
function largestOfFour(arr) {
    return arr.map((innerArr) => Math.max(...innerArr));
}

console.log( largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );