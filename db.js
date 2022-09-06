const { SeasonType } = require("./entities/seasonType");

function DB() {
    this.matches = [];
    this.players = [];
    this.seasons = [];
    this.seasonRankings = [];
    this.seasonRankingPlayers = [];
    this.seasonTypes = [];
    this.teams = [];

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

    this.saveTeam = function(team) {
        team.id = this.teams.length + 1;
        this.teams.push(team);
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
    this.findByNamePlayer = function(name) {
        return this.players.find(n => n.name == name);
    }
    this.findBySeason = function(seasonName) {
        const S1 = this.seasons.find(s => s.name == seasonName);
        return this.matches.find(m => m.seasonID == S1.id);
    }
    this.filterBySeason = function(seasonName) {
        const S1 = this.seasons.find(s => s.name == seasonName);
        return this.matches.filter(m => m.seasonID == S1.id);
    }
    this.filterByWinner = function(playerName, result) {
        const p1 = this.players.find(p => p.name == playerName);
        const pm1 = this.playerMatches.filter(p =>p.playerID == p1.id);
        return pm1.filter(w => w.isWinner == result);
    }
    
    
    return this;
}

const db = new DB();
db.init();

exports.DB = db;