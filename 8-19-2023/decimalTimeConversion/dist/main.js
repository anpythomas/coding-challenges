"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNormal = exports.toIndustrial = void 0;
function toIndustrial(time) {
    let numToTime = 0;
    if (typeof time === "number") {
        numToTime = time / 60;
    }
    else if (typeof time === "string") {
        numToTime = Number(time.slice(2, 4)) / 60 + Number(time[0]);
    }
    return Number(numToTime.toFixed(2));
}
exports.toIndustrial = toIndustrial;
function toNormal(time) {
    let strArray = time.toString().split(".");
    let finalNum = Math.round(Number("." + strArray[1]) * 60).toString();
    let finalString = finalNum.length === 1 ? "0" + finalNum : finalNum;
    return strArray[0] + ":" + finalString;
}
exports.toNormal = toNormal;
console.log(toIndustrial(2));
console.log(toNormal(1.5));
