"use strict";

/**
 * Solution 1
 * time: O(n * log n) - sorting
 * space: O(n)
 * 
 * @param {string} txt 
 * @param {number} n 
 * @returns {array[]}
 */
function wordFrequency(txt, n) {
    // Edge case
    if (txt.length === 0) return [];

    let wordMap = new Map();
    const wordArr = txt.split(" ");

    for (let word of wordArr) {
        const lowerCaseWord = word.toLowerCase();

        if (!wordMap.has(lowerCaseWord)) {
            wordMap.set(lowerCaseWord, 1);
        } else {
            const prevFreqVal = wordMap.get(lowerCaseWord);
            wordMap.set(lowerCaseWord, prevFreqVal + 1);
        }
    }

    // 2D arr of words and freqs
    let nestedWordArr = [...wordMap];
    // Decr order by freq val
    nestedWordArr.sort((innerWordArrA, innerWordArrB) => {
        const wordAFreqVal = innerWordArrA[1];
        const wordBFreqVal = innerWordArrB[1];

        return wordBFreqVal - wordAFreqVal;
    });

    // Last num words arr
    return nestedWordArr.slice(0, n);
}

console.log( wordFrequency("Hello hello world", 2) ); // [['hello', 2], ['world', 1]]
console.log( wordFrequency("The quick brown fox jumped over the lazy dog", 1) ); // [['the', 2]]
