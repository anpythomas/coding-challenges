function positiveSum(arr) {
    return arr.reduce((acc, curr) => {
      if (curr > 0) acc += curr;
      return acc;
    }, 0);
  }