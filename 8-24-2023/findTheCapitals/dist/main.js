"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitals = void 0;
function capitals(word) {
    // Create blank array called final array to store indexes
    let finalArray = [];
    // Iterate through string
    for (let i = 0; i < word.length; i++) {
        // Declare variable tmpChar and set to character ascii code
        const tmpChar = word.charCodeAt(i);
        // Check if between codes for A - Z
        if (tmpChar >= 65 && tmpChar <= 90) {
            // If yes, add to finalArray
            finalArray.push(i);
        }
    }
    // Return finalArray
    return finalArray;
}
exports.capitals = capitals;
console.log(capitals('adfEjefe3944EJeijadfiiIFj'));
