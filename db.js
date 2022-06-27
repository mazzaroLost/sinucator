function DB() {
    this.matches = [];
    this.players = [];
    this.playerMatches = [];
    this.seasons = [];
    this.seasonRankings = [];
    this.seasonRankingPlayers = [];
    this.seasonTypes = [];

    return this;
}

exports.DB = new DB();