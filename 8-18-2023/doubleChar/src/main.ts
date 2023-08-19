export function doubleChar(str: string): string {
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        newString += str[i] + str[i];
    }

    return newString;
}

console.log(doubleChar('hello'))