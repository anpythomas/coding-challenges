function eliminateUnsetBits(number) {
    // Remove all unset bits ('0') and convert binary string to int
    let result = parseInt(number.replaceAll('0', ''), 2)
    
    // If result is truthy, return result. Else, return 0
    return result ? result : 0
}