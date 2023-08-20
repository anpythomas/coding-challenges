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


// concat - concatenates the string values of two or more string and returns a new string since string in js are immutable

// in modern day js, it's more common to use the + operator or string literals to concatenat strings

// time complexity - worst cast scenario is O(n + m), where n is the length of the first string and m is the length of all other strings being concatenated. okay for shorter strings, but for longer strings or using in a loop, this can become probablamatic becuase each time this method is called it creates a new string. for a loop with many iterations, you should consider pushing to an arry in the loop and using join after the loop is finished to convert to string.


export function myConcatFunc99 (str1: string, str2: string) : string {
    let fillerString: string = 'the'
    return str1.concat(' ', fillerString, ' ', str2)
}

console.log(myConcatFunc99('jimmie', 'bull'))

export const aConcatFunction = (myStr: string, yourStr: string, aString: string) : string => {
    let theConcatedString: string = myStr.concat(' ', yourStr, ' ', aString)
    return theConcatedString
}

console.log(aConcatFunction('space', 'flight', 'no.77'))

let string1: string = "run"
let string2: string = "Forrest"

console.log(string1[0].toUpperCase().concat(string1.slice(1, string1.length), ', ', string2, ', ', string1, '!'))


// includes - this method searches if a string is in another string. returning true if it is and false if not. this search is case sensitive.

// this method takes a second argument which is the postion to start searching at. this defaults to zero if left empty.

// time complexity - the worst case is O(n*m) though this can be faster if the string is matched before the end of the mainstring. This can be faster in most modern JS search engines. For most common apps, this method is sufficient in term for speed.

export function includesFunc (str1: string, str2: string) : boolean {
    return str1.includes(str2)
}

console.log(includesFunc('Pete is crazy', 'is'))

export const aIncludesFunction = (string1: string, string2: string) : boolean => {
    let hasString: boolean = string1.includes(string2, 3)
    return hasString
}

console.log(aIncludesFunction('sammie the bull', 'mie'))

console.log("The gas is hott".includes('Gas'))