export function replaceNth(text: string, n: number, oldValue: string, newValue: string): string {
    let result: string = "";

    let counter: number = 1;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === oldValue && counter === n) {
            result += newValue;
            counter = 1;
        } else if (text[i] === oldValue && counter !== n) {
            result += text[i];
            counter += 1;
        } else {
            result += text[i];
        }
    }

    return result;
}

console.log(replaceNth('Hello, billie', 2, 'l', '*'))
