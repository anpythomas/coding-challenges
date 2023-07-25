"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMultiples = void 0;
function findMultiples(integer, limit) {
    var myArray = [];
    for (var i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            myArray.push(i);
        }
    }
    return myArray;
}
exports.findMultiples = findMultiples;
console.log(findMultiples(5, 25));
