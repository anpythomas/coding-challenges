function past(h, m, s){
    let totalSeconds = (h * 60 * 60) + (m * 60) + s
    return totalSeconds * 1000
  }