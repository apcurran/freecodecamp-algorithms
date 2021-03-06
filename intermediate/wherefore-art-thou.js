"use strict";

/**
 * @param {array} collection 
 * @param {object} source 
 * @returns {array}
 */
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection.filter((obj) => {
        for (let key of sourceKeys) {
            if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                return false;
            }

            return true;
        }
    });
}
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  