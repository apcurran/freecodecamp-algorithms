"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {string|undefined} missing letter
 */
function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        const currChar = str[i];
        const currCharCode = currChar.charCodeAt(0);
        const predictedNextCharCode = currCharCode + 1;
        const nextChar = str[i + 1];
        const nextCharCode = nextChar.charCodeAt(0);

        if (predictedNextCharCode === nextCharCode) continue;

        return String.fromCharCode(predictedNextCharCode);
    }
}

console.log( fearNotLetter("abce") ); // "d"