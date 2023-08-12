"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct = void 0;
const distinct = (a) => {
    let newList = [];
    for (let i = 0; i < a.length; i++) {
        if (!newList.includes(a[i])) {
            newList.push(a[i]);
        }
    }
    return newList;
};
exports.distinct = distinct;
console.log((0, exports.distinct)([1, 1, 2, 2, 2, 3, 1, 1, 4, 3, 3, 3]));
