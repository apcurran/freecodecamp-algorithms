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

// /**
//  * Solution 2
//  * @param {any[]} arr1 
//  * @param {any[]} arr2 
//  * @returns {any[]}
//  */
// function diffArray(arr1, arr2) {
//     const mergedArrs = [...arr1, ...arr2];

//     return mergedArrs.filter((val) => !arr1.includes(val) || !arr2.includes(val));
// }

/**
 * Solution 3
 * time: O(n)
 * space: O(n)
 * 
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @returns {any[]}
 */
function diffArray(arr1, arr2) {
    const arr1Cache = new Set(arr1);
    const arr2Cache = new Set(arr2);
    let diffVals = [];

    for (let val of arr2) {
        if (!arr1Cache.has(val)) {
            diffVals.push(val);
        }
    }

    for (let val of arr1) {
        if (!arr2Cache.has(val)) {
            diffVals.push(val);
        }
    }

    return diffVals;
}

console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) ); // [4]
console.log( diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) ); // ["pink wool"]
console.log( diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) ); // ["diorite", "pink wool"]