"use strict";

/**
 * 
 * @param {number} num 
 * @returns {number[]}
 */
function factors(num) {
    let factorsArr = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) factorsArr.push(i);
    }

    return factorsArr;
}

console.log( factors(45) ); // [1, 3, 5, 9, 15, 45]