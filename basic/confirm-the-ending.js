// function confirmEnding(str, target) {
//     const endingLength = target.length;
//     const ends = str.slice(-endingLength);
  
//     return ends === target;
// }

/**
 * @param {string} str 
 * @param {string} target 
 * @returns {boolean}
 */
function confirmEnding(str, target) {
    const regex = new RegExp(target + "$");

    return regex.test(str);
}
  
console.log(confirmEnding("Bastian", "n"));