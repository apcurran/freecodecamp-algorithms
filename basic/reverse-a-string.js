"use strict";

// /**
//  * Solution 1
//  * @param {string} str 
//  * @returns {string}
//  */
// function reverseString(str) {
//     return str
//             .split("")
//             .reverse()
//             .join("");
// }

// /**
//  * Solution 2
//  * @param {string} str 
//  * @returns {string}
//  */
// function reverseString(str) {
//     let reversedStr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }

//     return reversedStr;
// }

/**
 * Solution 3
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
    let reversedChars = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reversedChars.push(str[i]);
    }

    return reversedChars.join("");
}

console.log( reverseString("hello") );