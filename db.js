const { SeasonType } = require("./entities/seasonType");

function DB() {
    this.matches = [];
    this.players = [];
    this.playerMatches = [];
    this.seasons = [];
    this.seasonRankings = [];
    this.seasonRankingPlayers = [];
    this.seasonTypes = [];

    // cadastro de valores fixos da aplicação
    this.init = function() {
        this.saveSeasonType(new SeasonType("par/impar", "individual"));
        this.saveSeasonType(new SeasonType("par/impar", "dupla"));
        this.saveSeasonType(new SeasonType("3bolinhas", "individual"));
    }

    this.saveMatch = function(match) {
        match.id = this.matches.length + 1;
        this.matches.push(match);
    }

    this.savePlayer = function(player) {
        player.id = this.players.length + 1;
        this.players.push(player);
    }

    this.savePlayerMatch = function(playerMatch) {
        playerMatch.id = this.playerMatches.length + 1;
        this.playerMatches.push(playerMatch);
    }
    this.saveSeason = function(season) {
        season.id = this.seasons.length + 1;
        this.seasons.push(season);
    }

    this.saveSeasonRanking = function(seasonRanking) {
        seasonRanking.id = this.seasonRankings.length + 1;
        this.seasonRankings.push(seasonRanking);
    }
    this.saveSeasonRankingPlayer = function(seasonRankingPlayer) {
        seasonRankingPlayer.id = this.seasonRankingPlayers.length + 1;
        this.seasonRankingPlayers.push(seasonRankingPlayer);
    }

    this.saveSeasonType = function(seasonType) {
        seasonType.id = this.seasonTypes.length + 1;
        this.seasonTypes.push(seasonType);
    }
    return this;
}

const db = new DB();
db.init();

exports.DB = db;