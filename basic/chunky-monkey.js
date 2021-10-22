"use strict";

/**
 * @param {any[]} arr 
 * @param {number} size 
 * @returns {any[]}
 */
function chunkArrayInGroups(arr, size) {
    let chunkedArr = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);

        chunkedArr.push(chunk);
    }

    return chunkedArr;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));