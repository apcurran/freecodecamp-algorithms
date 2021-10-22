"use strict";

/**
 * @param {string} str 
 * @returns {string}
 */
function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

console.log( spinalCase('This Is Spinal Tap') ); // this-is-spinal-tap
console.log( spinalCase("thisIsSpinalTap") ); // this-is-spinal-tap