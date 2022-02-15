"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function rms(arr) {
    const squaresSum = arr.reduce((sum, currNum) => sum + (currNum ** 2), 0);
    
    return Math.sqrt(squaresSum / arr.length);
}

console.log( rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ); // 6.2048368229954285
