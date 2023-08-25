"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCapitalIndices = void 0;
function findCapitalIndices(word) {
    return word.split("")
        .map((elem, index) => {
        if (elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) <= 90) {
            return index;
        }
        return undefined;
    })
        .filter(item => item !== undefined);
}
exports.findCapitalIndices = findCapitalIndices;
console.log(findCapitalIndices("fEjfFj"));
