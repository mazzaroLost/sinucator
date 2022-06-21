function playerMatchCreate(playerID, matchID, isWinner) {
    return {
        "playerID": playerID,
        "matchID": matchID,
        "isWinner": isWinner
    }
}

var o = playerMatchCreate(1, 1, false);
console.log(o);
var a = playerMatchCreate(2, 1, true);
console.log(a);
