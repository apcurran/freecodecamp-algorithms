"use strict";

/**
 * @param {string} str 
 * @param {number} num 
 * @returns {string}
 */
function truncateString(str, num) {
    if (str.length > num) {
        const truncatedStr = str.slice(0, num);

        return `${truncatedStr}...`;
    }

    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));