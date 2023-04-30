function points(games) {

    let myTeamSumPoints = 0;

    for (i = 0; i < games.length; i++) {
        if (Number(games[i].split(":")[0]) > Number(games[i].split(":")[1])) {
            myTeamSumPoints += 3
        } else if (Number(games[i].split(":")[0]) === Number(games[i].split(":")[1])) {
            myTeamSumPoints += 1
        }

    }
    return myTeamSumPoints
  }

console.log(points(["3:1", "2:2", "0:1"]))