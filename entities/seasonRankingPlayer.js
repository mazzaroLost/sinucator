exports.SeasonRankingPlayer = function SeasonRankingPlayer(playerID, totalWins, totalDefeats) {
    this.id = 0;
    this.playerID = playerID;
    this.totalWins = totalWins;
    this.totalDefeats = totalDefeats;

    return this;
}