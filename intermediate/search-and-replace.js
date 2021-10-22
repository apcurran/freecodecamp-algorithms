"use strict";

/**
 * @param {string} str 
 * @param {string} before 
 * @param {string} after 
 * @returns {string}
 */
function myReplace(str, before, after) {
    const isBeforeUppercased = before[0] === before[0].toUpperCase() ? true : false;

    if (isBeforeUppercased) {
        const afterUppercased = after[0].toUpperCase() + after.slice(1);

        return str.replace(before, afterUppercased);
    }

    const loweredAfter = after.toLowerCase();

    return str.replace(before, loweredAfter);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));