"use strict";

/**
 * @param {string} str 
 * @param {number} num 
 * @returns {string}
 */
function repeatStringNumTimes(str, num) {
    if (num <= 0) return "";

    let resultStr = "";

    for (let i = 0; i < num; i++) {
        resultStr += str;
    }

    return resultStr;
}

console.log( repeatStringNumTimes("*", 3) );
console.log( repeatStringNumTimes("abc", 3) );
console.log( repeatStringNumTimes("abc", -2) );
console.log( repeatStringNumTimes("abc", 0) );