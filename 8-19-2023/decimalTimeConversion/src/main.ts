export function toIndustrial(time: number | string): number {
    let numToTime: number = 0;

    if (typeof time === "number") {
        numToTime = time / 60;
    } else if (typeof time === "string") {
        numToTime = Number(time.slice(2, 4)) / 60 + Number(time[0]);
    }

    return Number(numToTime.toFixed(2));
}

export function toNormal(time: number): string {
    let strArray: string[] = time.toString().split(".");

    let finalNum: number | string = Math.round(
        Number("." + strArray[1]) * 60
    ).toString();

    let finalString: string = finalNum.length === 1 ? "0" + finalNum : finalNum;

    return strArray[0] + ":" + finalString;
}

console.log(toIndustrial(2))
console.log(toNormal(1.5))