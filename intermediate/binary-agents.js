"use strict";

/**
 * @param {string} str 
 * @returns {string}
 */
function binaryAgent(str) {
    const binaryWordsStr = str.split(" ");
    let resultStr = "";

    for (let char of binaryWordsStr) {
        const letter = String.fromCharCode(parseInt(char, 2));
        resultStr += letter;
    }

    return resultStr;
}

console.log( binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") );