"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pendulum = void 0;
function pendulum(values) {
    // Sort incoming array from lowest to highest and set equal to sortedArray
    const sortedArray = values.sort(function (a, b) {
        return a - b;
    });
    // Declare variable of type boolean called toRight set equal to true
    let toRight = true;
    // Declare variable of type number array called answer and set equal to an array with the first element of sortedArray
    const answer = [sortedArray[0]];
    // Iterate through array starting at index 1
    for (let i = 1; i < sortedArray.length; i++) {
        // If toRight equals true, push current value to end of set toRight equal to false
        if (toRight === true) {
            answer.push(sortedArray[i]);
            toRight = false;
            // If toRight equals false, unshift current value to begining of new array and set toRight equal to true
        }
        else if (toRight === false) {
            answer.unshift(sortedArray[i]);
            toRight = true;
        }
    }
    // Return answer
    return answer;
}
exports.pendulum = pendulum;
console.log(pendulum([100, 3, 2, 4, 32, 53, 12]));
