function points(games) {

    let myTeamSumPoints = 0;

    for (i = 0; i < games.length; i++) {
        let scoreMyTeam = Number(games[i].split(":")[0])
        let scoreOpponent = Number(games[i].split(":")[1])
        
        if (scoreMyTeam > scoreOpponent) {
            myTeamSumPoints += 3
        } else if (scoreMyTeam === scoreOpponent) {
            myTeamSumPoints += 1
        }

    }
    return myTeamSumPoints
  }

console.log(points(["3:1", "2:2", "0:1"]))