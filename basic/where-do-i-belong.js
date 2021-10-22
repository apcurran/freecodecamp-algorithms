"use strict";

// /**
//  * Solution 1
//  * @param {number[]} arr 
//  * @param {number} num 
//  * @returns {number}
//  */
// function getIndexToIns(arr, num) {
//     const arrSortedCopy =[...arr].sort((a, b) => a - b);

//     for (let i = 0; i < arrSortedCopy.length; i++) {
//         const currVal = arrSortedCopy[i];

//         if (currVal >= num) {
//             return i;
//         }
//     }

//     // No index for num
//     return arr.length;
// }

/**
 * Solution 2
 * @param {number[]} arr 
 * @param {number} num 
 * @returns {number}
 */
function getIndexToIns(arr, num) {
    return [...arr, num]
            .sort((a, b) => a - b)
            .indexOf(num);
}

console.log( getIndexToIns([40, 60], 50) ); // 1
console.log( getIndexToIns([5, 3, 20, 3], 5) ); // 2