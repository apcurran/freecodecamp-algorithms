"use strict";

// /**
//  * Solution 1
//  * @param {any[]} arr1 
//  * @param {any[]} arr2 
//  * @returns {any[]}
//  */
// function diffArray(arr1, arr2) {
//     let resultArr = [];

//     for (let val of arr1) {
//         if (!arr2.includes(val)) {
//             resultArr.push(val);
//         }
//     }

//     for (let val of arr2) {
//         if (!arr1.includes(val)) {
//             resultArr.push(val);
//         }
//     }

//     return resultArr;
// }

/**
 * Solution 2
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @returns {any[]}
 */
function diffArray(arr1, arr2) {
    const mergedArrs = [...arr1, ...arr2];

    return mergedArrs.filter((val) => !arr1.includes(val) || !arr2.includes(val));
}

console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) );
console.log( diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) );
console.log( diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) );