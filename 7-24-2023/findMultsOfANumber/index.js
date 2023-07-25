"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMultiples = void 0;
function findMultiples(integer, limit) {
    let myArray = [];
    for (let i = integer; i <= limit; i++) {
        i % integer === 0 ? myArray.push(i) : 'pass';
    }
    return myArray;
}
exports.findMultiples = findMultiples;
console.log(findMultiples(5, 25));
