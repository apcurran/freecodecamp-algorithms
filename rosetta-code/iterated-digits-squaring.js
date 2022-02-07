"use strict";

/**
 * If you add the square of the digits of a Natural number (an integer bigger than zero),
 * you always end with either 1 or 89.
 * Write a function that takes a number as a parameter
 * and returns 1 or 89 after performing the mentioned process.
 * 
 * Solution 1
 * 
 * @param {number} n 
 * @returns {number}
 */
function iteratedSquare(n) {
    let squaredDigitsSum = n;

    while (squaredDigitsSum !== 1 && squaredDigitsSum !== 89) {
        const revisedSquaredN = squaredDigitsSum
                                    .toString()
                                    .split("")
                                    .reduce((sum, digit) => sum + (Number(digit) ** 2), 0);

        squaredDigitsSum = revisedSquaredN;
    }

    return squaredDigitsSum;
}

console.log( iteratedSquare(4) ); // 89
console.log( iteratedSquare(7) ); // 1
console.log( iteratedSquare(100) ); // 1
