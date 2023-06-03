function noIfsNoButs(a, b) {
    switch(true) {
      case (a < b):
        return `${a} is smaller than ${b}`
      case (a > b):
        return `${a} is greater than ${b}`
      default:
        return `${a} is equal to ${b}`
    }
  }