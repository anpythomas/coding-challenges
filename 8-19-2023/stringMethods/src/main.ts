// charAt - this method takes a number as input and returns the char located at that index. 

// behavior 1) if you don't include a number as argument, then the method will return the first char in the string. 2) If you pass a negative number or a number longer than the string, charAt will return an empty string.

// Time complexity - O(1) contant time

export const charAtFunc = (mystring: string, index: number) : string => {
    return mystring.charAt(index)
}

console.log(charAtFunc('sammie', 4))

export function charAtFunc2 (str: string, i: number) : string{
    let stringReturned = str.charAt(i)
    return stringReturned
}

console.log(charAtFunc2('Kats are fast!', 6))

console.log("Wombat".charAt(5))


// charCodeAt - this method takes a number as an agrument and returns the unicode value at that index

// behavior 1) if the index is out of range (negative or greater than the length of the string), this method will return a Nan value.

// time complexity - O(1) constant time since we are searching by index

export function charCodeAtFunc (aString: string, anIndex: number) : number {
    return aString.charCodeAt(anIndex)
}

console.log(charCodeAtFunc('Tesla Powered', 4))

export const charCodeAtFunc2 = (myStr: string, myI: number) => {
    let myAscii: number = myStr.charCodeAt(myI)
    
    return myAscii
}

console.log(charCodeAtFunc2('Hi, Willie it Joe T', 4))

console.log("Run, you beaaaassttt!!!".charCodeAt(10))