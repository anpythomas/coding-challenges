function eliminateUnsetBits(number) {
    return parseInt(number.replaceAll('0', ''), 2) ? parseInt(number.replaceAll('0', ''), 2) : 0
  }