"use strict";

const list = [
  { name: "Lagos", population: 21.0 },
  { name: "Cairo", population: 15.2 },
  { name: "Kinshasa-Brazzaville", population: 11.3 },
  { name: "Greater Johannesburg", population: 7.55 },
  { name: "Mogadishu", population: 5.85 },
  { name: "Khartoum-Omdurman", population: 4.98 },
  { name: "Dar Es Salaam", population: 4.7 },
  { name: "Alexandria", population: 4.58 },
  { name: "Abidjan", population: 4.4 },
  { name: "Casablanca", population: 3.98 }
];

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} name 
 * @returns {number} index of found object with the correct name value
 */
function searchCity(name) {
    return list.findIndex((obj) => obj.name === name);
}

console.log( searchCity("Casablanca") ); // 9
console.log( searchCity("Cairo") ); // 1
