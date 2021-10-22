"use strict";

/**
 * @param {number} celsius 
 * @returns {number}
 */
function convertToF(celsius) {
    return (celsius * (9 / 5)) + 32;
}

console.log( convertToF(-30) ); // -22
console.log( convertToF(-10) ); // -14