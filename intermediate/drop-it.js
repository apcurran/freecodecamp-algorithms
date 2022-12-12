"use strict";

// /**
//  * solution 1
//  * time: O(n^2) -- shift is O(n) op inside of an O(n) loop 
//  * space: O(1)
//  * 
//  * @param {number[]} arr 
//  * @param {function} func 
//  * @returns {number[]}
//  */
// function dropElements(arr, func) {
//     // while there are items in the arr AND
//     // the provided function, with the current first elem as input, returns false
//     while (arr.length > 0 && func(arr[0]) === false) {
//         // remove first elem
//         arr.shift();
//     }

//     return arr;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @param {function} func 
 * @returns {number[]}
 */
function dropElements(arr, func) {
    const arrStartingIndex = arr.findIndex(func);

    if (arrStartingIndex === -1) return [];

    return arr.slice(arrStartingIndex);
}

console.log( dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) ); // [3, 4]
console.log( dropElements([0, 1, 0, 1], function(n) {return n === 1;}) ); // [1, 0, 1]