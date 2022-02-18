"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function standardDeviation(arr) {
    const avg = (arr.reduce((sum, curr) => sum + curr, 0)) / arr.length;
    const deviationsFromAvg = arr.map((num) => (num - avg) ** 2);
    const variance = (deviationsFromAvg.reduce((sum, curr) => sum + curr, 0)) / arr.length;

    // Result rounded off to thousands-place
    return +(Math.sqrt(variance)).toFixed(3);
}

console.log( standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) ); // 2
console.log( standardDeviation([600, 470, 170, 430, 300]) ); // 147.323
