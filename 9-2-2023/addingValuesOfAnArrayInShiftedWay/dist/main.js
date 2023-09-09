"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addingShifted = void 0;
function addingShifted(arrayOfArrays, shift) {
    let result = []; // Initialize an empty array to store the final result
    for (let i = 0; i < arrayOfArrays.length; i++) { // Iterate over each array in the 'arrays' parameter
        console.log(arrayOfArrays[i]);
        for (let j = 0; j < arrayOfArrays[i].length; j++) { // Iterate over each element in the current array
            const index = j + shift * i; // Calculate the index in the 'result' array to add the current element to
            console.log(`index: ${index}  j: ${j} + shift: ${shift} * i: ${i}`);
            result[index] = (result[index] || 0) + arrayOfArrays[i][j]; // Add the current element to the 'result' array at the calculated index. If the index does not exist in the 'result' array, initialize it to 0 before adding.
            console.log(`result[index]: ${result[index]} = result[index] ${result[index]} || 0 + arrayOfArrary[i][j]: ${arrayOfArrays[i][j]}`);
        }
    }
    return result; // Return the final 'result' array
}
exports.addingShifted = addingShifted;
console.log(addingShifted([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], 2));
// 1, 2, 7, 5, 13, 8, 9
