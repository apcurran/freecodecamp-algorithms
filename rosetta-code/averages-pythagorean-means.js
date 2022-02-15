"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} rangeArr 
 * @returns {object}
 */
function pythagoreanMeans(rangeArr) {
    const arithMean = arithmeticMean(rangeArr);
    const geoMean = geometricMean(rangeArr);
    const harmMean = harmonicMean(rangeArr);

    const isTestPassed = arithMean >= geoMean && geoMean >= harmMean ? true : false;

    return {
        values: {
            Arithmetic: arithMean,
            Geometric: geoMean,
            Harmonic: harmMean
        },
        test: `is A >= G >= H ? ${isTestPassed ? "yes" : "no"}`
    };
}

/**
 * time: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function arithmeticMean(arr) {
    const sum = arr.reduce((sum, currNum) => sum + currNum, 0);

    return sum / arr.length;
}

/**
 * time: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function geometricMean(arr) {
    const product = arr.reduce((prod, currNum) => prod * currNum, 1);

    return product ** (1 / arr.length);
}

/**
 * time: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function harmonicMean(arr) {
    const recipSum = arr.reduce((sum, currNum) => sum + (1 / currNum), 0);

    return arr.length / recipSum;
}

console.log( pythagoreanMeans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) );
// {
//     values: {
//         Arithmetic: 5.5,
//         Geometric: 4.528728688116765,
//         Harmonic: 3.414171521474055
//     },
//     test: 'is A >= G >= H ? yes'
// }
