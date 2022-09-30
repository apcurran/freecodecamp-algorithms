"use strict";

// /**
//  * solution 1
//  * time: O(log n)
//  * space: O(log n)
//  * 
//  * @param {number[]} searchList 
//  * @param {number} value 
//  * @returns {number[]|string}
//  */
// function binarySearch(searchList, value) {
//     let start = 0;
//     let end = searchList.length - 1;
//     let resArr = [];

//     while (start <= end) {
//         // to prevent overflow...
//         let middle = start + Math.floor((end - start) / 2);
//         const currArrVal = searchList[middle];

//         resArr.push(currArrVal);

//         if (currArrVal === value) {
//             return resArr;
//         }

//         if (value < searchList[middle]) {
//             // search left half
//             end = middle - 1;
//         } else {
//             // search right half
//             start = middle + 1;
//         }
//     }

//     return "Value Not Found";
// }

/**
 * solution 2 - slightly faster calculation of middle
 * time: O(log n)
 * space: O(log n)
 * 
 * @param {number[]} searchList 
 * @param {number} value 
 * @returns {number[]|string}
 */
function binarySearch(searchList, value) {
    let start = 0;
    let end = searchList.length - 1;
    let resArr = [];

    while (start <= end) {
        // to prevent overflow...
        // slightly faster unsigned right shift operator
        let middle = (start + end) >>> 1;
        const currArrVal = searchList[middle];

        resArr.push(currArrVal);

        if (currArrVal === value) {
            return resArr;
        }

        if (value < searchList[middle]) {
            // search left half
            end = middle - 1;
        } else {
            // search right half
            start = middle + 1;
        }
    }

    return "Value Not Found";
}

const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];

console.log( binarySearch(testArray, 0) ); // [13, 5, 2, 0]
console.log( binarySearch(testArray, 1) ); // [13, 5, 2, 0, 1]
