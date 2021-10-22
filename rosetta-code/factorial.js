"use strict";

/**
 * 
 * @param {number} n 
 * @returns {number}
 */
function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

// /**
//  * 
//  * @param {number} n 
//  * @returns {number}
//  */
// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }

console.log( factorial(3) );
console.log( factorial(5) );