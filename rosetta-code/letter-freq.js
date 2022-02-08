"use strict";

/**
 * Solution 1
 * time: O(n * log n) - due to sorting
 * space: O(n)
 * 
 * @param {string} txt 
 * @returns {array[]}
 */
function letterFrequency(txt) {
    let charFreqMap = new Map();

    for (let char of txt) {
        if (!charFreqMap.has(char)) {
            // Add new char
            charFreqMap.set(char, 1);
        } else {
            const prevCharFreq = charFreqMap.get(char);
            charFreqMap.set(char, prevCharFreq + 1);
        }
    }

    // sort charMap
    const sortedChar2DArr = [...charFreqMap].sort((firstArr, secondArr) => {
        const firstArrChar = firstArr[0];
        const secondArrChar = secondArr[0];

        if (firstArrChar < secondArrChar) return -1;

        if (secondArrChar > firstArrChar) return 1;
    });

    return sortedChar2DArr;
}

console.log( letterFrequency("Not all that Mrs. Bennet, however") );
// [[" ", 5], [",", 1], [".", 1], ["B", 1], ["M", 1], ["N", 1], ["a", 2], ["e", 4], ["h", 2], ["l", 2], ["n", 2], ["o", 2], ["r", 2], ["s", 1], ["t", 4], ["v", 1], ["w", 1]]