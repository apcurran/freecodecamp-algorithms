"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function mode(arr) {
    let numMap = new Map();

    for (let num of arr) {
        if (!numMap.has(num)) {
            // Add new num to map
            numMap.set(num, 1);
        } else {
            // Incr prev num val
            const prevNumVal = numMap.get(num);
            numMap.set(num, prevNumVal + 1);
        }
    }

    const modeNumOccurrences = Math.max(...numMap.values());
    let modeArr = [];

    for (let [num, val] of numMap) {
        if (val === modeNumOccurrences) {
            modeArr.push(num);
        }
    }

    return modeArr;
}

console.log( mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]) ); // [6]
console.log( mode([1, 2, 4, 4, 1]) ); // [1, 4]
