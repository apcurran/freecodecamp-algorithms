/**
 * solution 1 -- two-pointer technique
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function palindrome(str) {
    const lowerStr = str.toLowerCase();
    const alphaNumStr = lowerStr.replace(/[^a-z0-9]/g, "");
    let leftPointer = 0;
    let rightPointer = alphaNumStr.length - 1;

    while (leftPointer < rightPointer) {
        const leftChar = alphaNumStr[leftPointer];
        const rightChar = alphaNumStr[rightPointer];

        if (leftChar !== rightChar) return false;

        leftPointer++;
        rightPointer--;
    }

    return true;
}
  
console.log( palindrome("eye") ); // true
console.log( palindrome("_eye") ); // true
console.log( palindrome("nope") ); // false