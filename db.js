function DB() {
    this.matches = [];
    this.players = [];
    this.playerMatches = [];
    this.seasons = [];
    this.seasonRankings = [];
    this.seasonRankingPlayers = [];
    this.seasonTypes = [];

    this.saveSeasonType = function(seasonType) {
        seasonType.id = this.seasonTypes.length + 1;
        this.seasonTypes.push(seasonType);
    }
    return this;
}

exports.DB = new DB();