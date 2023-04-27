function sumMix(x){
    return sum = x.reduce((acc, item) => acc + Number(item), 0);
  }

console.log(sumMix([4, 2, '3', '6']))