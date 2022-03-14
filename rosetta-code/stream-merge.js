"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[][]} lists 
 * @returns {number[]}
 */
function mergeLists(lists) {
    return lists
            .flat()
            .sort((a, b) => a - b); 
}

console.log( mergeLists([[1, 3, 5, 9, 10], [2, 4, 6, 7, 8]]) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
