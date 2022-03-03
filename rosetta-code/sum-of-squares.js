"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function sumsq(arr) {
    let squareSum = 0;

    for (let num of arr) {
        squareSum += num ** 2;
    }

    return squareSum;
}

console.log( sumsq([1, 2, 3, 4, 5]) ); // 55
