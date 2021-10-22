"use strict";

/**
 * @param {...array} arr 
 * @returns {array}
 */
function uniteUnique(...arr) {
    const flattenedArr = arr.flat();
    
    return [...new Set(flattenedArr)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));