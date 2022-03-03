"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sum(a, b) {
    let totalSum = 0;

    for (let i = a; i <= b; i++) {
        const sequenceRes = sequenceFunc(i);
        totalSum += sequenceRes;
    }

    return totalSum;
}

/**
 * 
 * @param {number} x 
 * @returns {number}
 */
function sequenceFunc(x) {
    return 1 / (x ** 2);
}

console.log( sum(1, 100) ); // 1.6349839001848923
