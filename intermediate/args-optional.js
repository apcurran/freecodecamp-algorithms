"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {...any} args
 * @returns {number|object} 
 */
function addTogether(...args) {
    const [argA, argB] = args;

    if (typeof argA !== "number") {
        return;
    } else if (argB && typeof argB !== "number") {
        return;
    }

    if (argB === undefined) {
        // only one arg, return a func that expects one arg and returns the sum
        return function adderFunc(argB) {
           return addTogether(argA, argB);
        };
    }

    return argA + argB;
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(23, 30)); // 53
console.log(addTogether(5)(7)); // 12