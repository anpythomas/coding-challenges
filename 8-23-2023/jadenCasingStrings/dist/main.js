"use strict";
String.prototype.toJadenCase = function () {
    return this.split(" ")
        .map((elem) => (elem = elem[0].toUpperCase() + elem.slice(1)))
        .join(" ");
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
