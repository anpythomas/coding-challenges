"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productArray = void 0;
function productArray(nums) {
    // Declare variable called answer, which accepts only numbers array, and set to empty array
    let answer = [];
    // Iterate through array starting from index 0 with outer as index
    for (let outer = 0; outer < nums.length; outer++) {
        // Create varaiable called tmpProd set equal to 1
        let tmpProd = 1;
        // For each iteration, start from index 0 and itearate through array with inner as index
        for (let inner = 0; inner < nums.length; inner++) {
            // If outer index does NOT equal inner index, multiply current element times tmpProd
            if (outer !== inner) {
                tmpProd *= nums[inner];
            }
        }
        // At end of this inner loop push tmpProd to answer array
        answer.push(tmpProd);
    }
    // Return answer array
    return answer;
}
exports.productArray = productArray;
console.log(productArray([4, 2, 5, 2, 1]));
