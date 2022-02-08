
/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function isBalanced(str) {
    const bracketMap = new Map([
        ["[", "]"]
    ]);

    let stack = [];

    // If the bracket is an opening bracket, then push it on to the stack
    for (let bracket of str) {
        if (bracketMap.get(bracket)) {
            stack.push(bracket);
        } else {
            const poppedBracket = stack.pop();
            // Check to see if the popped bracket is the matching bracket
            const possibleMatchingCloseBracket = bracketMap.get(poppedBracket);

            if (possibleMatchingCloseBracket !== bracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log( isBalanced("[[]]") ); // true
console.log( isBalanced("[]]]") ); // false