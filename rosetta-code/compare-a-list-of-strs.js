"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} arr 
 * @returns {boolean}
 */
function allEqual(arr) {
    const leftoverEqualStrs = arr.filter((str) => str === arr[0]);

    return arr.length === leftoverEqualStrs.length;
}

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} arr 
 * @returns {boolean}
 */
function azSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        const currStr = arr[i];
        const prevStr = arr[i - 1];

        if (currStr <= prevStr) {
            return false;
        }
    }

    return true;
}

console.log( allEqual(["AA", "AA", "AA", "AA"]) ); // true
console.log( allEqual(["AA", "ACB", "BB", "CC"]) ); // false

console.log( azSorted(["AA", "ACB", "BB", "CC"]) ); // true
console.log( azSorted(["AA", "AA", "AA", "AA"]) ); // false
