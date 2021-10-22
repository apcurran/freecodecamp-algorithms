"use strict";

/**
 * @param {string} str 
 * @returns {string}
 */
function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(titleCase("I'm a little tea pot")) // I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")) // Short And Stout