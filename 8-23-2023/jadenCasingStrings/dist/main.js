"use strict";
String.prototype.toJadenCase = function () {
    let jCaseArray = this.split(" ");
    for (let i = 0; i < jCaseArray.length; i++) {
        jCaseArray[i] =
            jCaseArray[i][0].toUpperCase() +
                jCaseArray[i].slice(1, jCaseArray[i].length);
    }
    return jCaseArray.join(" ");
};
console.log(('How can mirrors be real if our eyes aren\'t real').toJadenCase());
