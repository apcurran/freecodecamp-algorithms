"use strict";

/**
 * Solution 1
 * Sort nums in arr first
 * Iterate through all numbers between both (inclusive) nums, and add up the total value
 * Return total
 * @param {number[]} arr - Array of nums
 * @returns {number} 
 */
function sumAll(arr) {
    const startNum = Math.min(arr[0], arr[1]);
    const endNum = Math.max(arr[0], arr[1]);
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
}

console.log( sumAll([5, 10]) ); // 45

/**
 * Solution 2
 * @param {number[]} arr - Array of nums
 * @returns {number} 
 */
function sumAllArithmeticProgression(arr) {
    const [startNum, endNum] = arr;
    // Count of all nums between two nums
    const numCount = Math.abs(startNum - endNum) + 1;
    
    return (numCount * (startNum + endNum)) / 2;
}

// console.log( sumAllArithmeticProgression([5, 10]) );