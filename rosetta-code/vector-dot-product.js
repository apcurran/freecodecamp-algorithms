"use strict";

/**
 * @param  {...array} vectors
 * @returns {null | number}
 */
function dotProduct(...vectors) {
    // There may only be two vectors passed as arguments to the func
    if (vectors.length !== 2) {
        return null;
    }

    const firstVec = vectors[0];
    const secondVec = vectors[1];

    if (firstVec.length !== secondVec.length) {
        return null;
    }

    let productSum = 0;

    for (let i = 0; i < firstVec.length; i++) {
        const firstVecNum = firstVec[i];
        const secondVecNum = secondVec[i];
        const product = firstVecNum * secondVecNum;

        productSum += product;
    }

    return productSum;
}

console.log( dotProduct([1], [1, 2]) ); // null
console.log( dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]) ); // null
console.log( dotProduct([1], [1]) ); // null
console.log( dotProduct([1, 3, -5], [4, -2, -1]) ); // 3