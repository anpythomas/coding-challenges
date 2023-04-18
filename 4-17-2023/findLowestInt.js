class SmallestIntegerFinder {
    findSmallestInt(args) {
      let lowVal = args[0];
      for (let i = 0; i < args.length; i++){
        if (args[i] < lowVal) {
          lowVal = args[i];
        }
      }
      return lowVal
    }
  }