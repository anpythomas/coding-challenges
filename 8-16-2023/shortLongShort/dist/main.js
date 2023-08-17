"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortLongShort = void 0;
function shortLongShort(a, b) {
    if (a.length > b.length) {
        return b + a + b;
    }
    return a + b + a;
}
exports.shortLongShort = shortLongShort;
console.log(shortLongShort("aaa", "bb"));
