"use strict";

/**
 * Solution 1
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {string[]} strArr 
 * @returns {string[]}
 */
function lengthSorter(strArr) {
    return strArr.sort((wordA, wordB) => {
        // First, check str lens
        if (wordA.length > wordB.length) {
            return -1;
        } else if (wordA.length === wordB.length) {
            // Next, check for ascending lexicographic order for strings of equal length
            if (wordA < wordB) {
                return -1;
            }

            return 1;
        }

        return 1;
    });
}

console.log( lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"]) ); // ["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]
console.log( lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"]) ); // ["going", "good", "hope", "your", "day", "is", "?","I"]

