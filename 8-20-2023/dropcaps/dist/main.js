"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropCap = void 0;
function dropCap(s) {
    let fullArray = s.split(" ");
    let newArray = [];
    for (let i = 0; i < fullArray.length; i++) {
        if (fullArray[i].length > 2) {
            let tmpVarOne = "";
            tmpVarOne =
                fullArray[i][0].toUpperCase() +
                    fullArray[i].slice(1, fullArray[i].length).toLowerCase();
            newArray.push(tmpVarOne);
        }
        else {
            newArray.push(fullArray[i]);
        }
    }
    return newArray.join(" ");
}
exports.dropCap = dropCap;
console.log(dropCap("hello, I'TS Sammiee "));
