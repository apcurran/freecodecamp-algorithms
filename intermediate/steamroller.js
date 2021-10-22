"use strict";
// Cannot use arr.flat() method
function steamrollArray(arr) {
    const flatArr = [].concat(...arr);
    const isNestedArr = flatArr.some(Array.isArray);

    return isNestedArr ? steamrollArray(flatArr) : flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));