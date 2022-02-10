"use strict";

/**
 * Solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} strNum1 
 * @param {string} strNum2 
 * @returns {string}
 */
function mult(strNum1, strNum2) {
    const bigIntNum1 = BigInt(strNum1);
    const bigIntNum2 = BigInt(strNum2);

    return String(bigIntNum1 * bigIntNum2);
}

console.log( mult("18446744073709551616", "18446744073709551616") ); // "340282366920938463463374607431768211456"