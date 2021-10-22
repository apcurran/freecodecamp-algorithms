"use strict";

/**
 * @param {string[]} arr 
 * @returns {boolean}
 */
function mutation(arr) {
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();
    let charMap = new Map();

    for (let char of str1) {
        charMap.set(char, true);
    }

    for (let char of str2) {
        if (!charMap.has(char)) return false;
    }

    return true;
}

console.log( mutation(["hello", "hey"]) ); // false
console.log( mutation(["hello", "Hello"]) ); // true