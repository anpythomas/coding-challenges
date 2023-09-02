"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addingShifted = void 0;
function addingShifted(arrayOfArrays, shift) {
    console.log(arrayOfArrays, shift);
    let answer = [];
    // Create a loop that loops for the length of the parent (outer array)
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for (let n = 0; n < arrayOfArrays[i].length; n++) {
            console.log(arrayOfArrays[i][n]);
        }
        console.log("");
    }
    return answer;
}
exports.addingShifted = addingShifted;
console.log(addingShifted([[], [], []], 2));
