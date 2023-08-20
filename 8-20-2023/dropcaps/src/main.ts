export function dropCap(s: string): string {
    let fullArray: string[] = s.split(" ");
    let newArray: string[] = [];

    for (let i = 0; i < fullArray.length; i++) {
        if (fullArray[i].length > 2) {
            let tmpVarOne: string = "";
            tmpVarOne =
                fullArray[i][0].toUpperCase() +
                fullArray[i].slice(1, fullArray[i].length).toLowerCase();
            newArray.push(tmpVarOne);
        } else {
            newArray.push(fullArray[i]);
        }
    }

    return newArray.join(" ");
}

console.log(dropCap("hello, I'TS Sammiee "))