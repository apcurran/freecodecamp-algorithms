"use strict";

/**
 * @param {string} str 
 * @returns {array}
 */
function pairElement(str) {
    const dnaMap = new Map([
        ["G", "C"],
        ["C", "G"],
        ["A", "T"],
        ["T", "A"]
    ]);
    const mappedChars = str.split("").map((char) => {
        const matchingDnaChar = dnaMap.get(char);

        return [char, matchingDnaChar];
    });

    return mappedChars;
}

console.log(pairElement("GCG"));