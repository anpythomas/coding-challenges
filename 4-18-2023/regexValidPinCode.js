function validatePIN (pin) {
    let newPin = pin.trim()
    console.log(newPin.length, pin.length)

    if (newPin.length === 4 || newPin.length === 6) {
        return true
    }

}

console.log(validatePIN("123 "))