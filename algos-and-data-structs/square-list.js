"use strict";

/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
function squareList(arr) {
    // Only change code below this line
    return arr
            .filter((num) => Number.isInteger(num) && num >= 0)
            .map((num) => num ** 2);
    // Only change code above this line
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);