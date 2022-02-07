"use strict";

/**
 * Solution 1
 * 
 * n = arr[0].length
 * 
 * time: O(n)
 * space: O(n)
 * 
 * @param {array[]} arr 
 * @returns {string[]}
 */
function loopSimult(arr) {
    let resArr = [];

    for (let i = 0; i < arr[0].length; i++) {
        const firstArrElem = arr[0][i];
        const secondArrElem = arr[1][i];
        const thirdArrElem = arr[2][i];

        const elemsConcatStr = firstArrElem + secondArrElem + thirdArrElem;
        resArr.push(elemsConcatStr);   
    }

    return resArr;
}

console.log( loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]]) ); // ["aA1", "bB2", "cC3"]
