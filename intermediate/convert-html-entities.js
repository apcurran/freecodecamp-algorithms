"use strict";

/**
 * @param {string} str 
 * @returns {string}
 */
function convertHTML(str) {
    let resultStr = "";

    for (let char of str) {
        if (char === "&") {
            resultStr += "&amp;";
        } else if (char === "<") {
            resultStr += "&lt;";
        } else if (char === ">") {
            resultStr += "&gt;";
        } else if (char === '"') {
            resultStr += "&quot;";
        } else if (char === "'") {
            resultStr += "&apos;";
        } else {
            resultStr += char;
        }
    }

    return resultStr;
}

console.log( convertHTML("Dolce & Gabbana") ); // Dolce &amp; Gabbana
console.log( convertHTML("Hamburgers < Pizza < Tacos") ); // Hamburgers &lt; Pizza &lt; Tacos
console.log( convertHTML('Stuff in "quotation marks"') ); // Stuff in &quot;quotation marks&quot;