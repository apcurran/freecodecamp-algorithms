"use strict";

/**
 * @param {number} num 
 * @param {string} result
 * @returns {string}
 */
function convertToRoman(num, result = "") {
    const romanMap = new Map([
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ]);

    for (let [key, val] of romanMap) {
        if (num >= val && num !== 0) {
            return convertToRoman(num - val, result + key);
        }
    }

    return result;
}

console.log( convertToRoman(36) );