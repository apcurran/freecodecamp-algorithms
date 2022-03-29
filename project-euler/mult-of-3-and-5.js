"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} num
 * @returns {number}
 */
function multiplesOf3and5(num) {
    let sum = 0;

    for (let i = 3; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log( multiplesOf3and5(1000) ); // 233168