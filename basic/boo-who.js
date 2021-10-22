"use strict";

/**
 * @param {any} bool 
 * @returns {boolean}
 */
function booWho(bool) {
    return typeof bool === "boolean";
}

console.log( booWho(null) ); // false
console.log( booWho(true) ); // true
console.log( booWho(NaN) ); // false
console.log( booWho(2) ); // false