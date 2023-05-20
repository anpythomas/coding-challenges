function findAverage(array) {
    return array.length > 0 ? array.reduce((tot, cv) => tot + cv, 0) / array.length : 0
  }