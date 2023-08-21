"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tidyNumber = void 0;
function tidyNumber(num) {
    let myArray = (String(num)).split("");
    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i - 1] > myArray[i]) {
            return false;
        }
    }
    return true;
}
exports.tidyNumber = tidyNumber;
console.log(tidyNumber(12343));
