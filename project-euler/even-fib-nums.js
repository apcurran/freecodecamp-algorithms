"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function fiboEvenSum(n) {
    // grand total
    let evenSum = 0;
    
    let a = 1;
    let b = 1;
    
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        
        if (c % 2 === 0 && c <= n) {
            evenSum += c;
        }

        a = b;
        b = c;
    }
    
    return evenSum;
}

console.log( fiboEvenSum(8) ); // 10
console.log( fiboEvenSum(34) ); // 44
console.log( fiboEvenSum(60) ); // 44
console.log( fiboEvenSum(1000) ); // 798
