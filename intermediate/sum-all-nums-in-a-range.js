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
    const [firstNum, secondNum] = arr.sort((a, b) => a - b);
    let total = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        total += i;
    }

    return total;
}

console.log( sumAll([5, 10]) );

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

console.log( sumAllArithmeticProgression([5, 10]) );