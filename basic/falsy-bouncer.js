"use strict";

/**
 * @param {any[]} arr 
 * @returns {any[]}
 */
function bouncer(arr) {
    return arr.filter((val) => Boolean(val) !== false);
}

console.log( bouncer([7, "ate", "", false, 9]) );
