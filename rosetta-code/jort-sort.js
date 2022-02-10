"use strict";

/**
 * Solution 1
 * time: O(n * log n) -- due to sorting
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {boolean}
 */
function jortsort(arr) {
    const sortedArrCopy = [...arr].sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        const originalArrElem = arr[i];
        const sortedArrElem = sortedArrCopy[i];

        if (originalArrElem !== sortedArrElem) return false;
    }

    return true;
}

console.log( jortsort([1,2,3,4,5]) ); // true
console.log( jortsort([1,2,13,4,5]) ); // false
