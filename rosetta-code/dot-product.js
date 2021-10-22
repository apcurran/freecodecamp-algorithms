"use strict";

/**
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number}
 */
function dotProduct(arr1, arr2) {
    let productSum = 0;

    for (let i = 0; i < arr1.length; i++) {
        const product = arr1[i] * arr2[i];

        productSum += product;
    }

    return productSum;
}

console.log( dotProduct([1, 3, -5], [4, -2, -1]) ); // 4 + -6 + 5 = 3