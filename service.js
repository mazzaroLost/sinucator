const { DB } = require("./db");
const { Match } = require("./entities/match");
const { Player } = require("./entities/player");



exports.addPlayer = function(name, nickname) {
    const isNicknameUsed = DB.players.some(x => x.nickname == nickname);

    if(isNicknameUsed) {
        return "Apelido " + nickname + " ja  usado mané!";
    }

    DB.savePlayer(new Player(name, nickname));
}


exports.addMatch = function(seasonID) {
    const isSeasonValid = DB.matches.some(x => x.seasonID != seasonID);

    if(isSeasonValid) {
        return "Temporada" + " " + seasonID + " " + "não esta diponivel";
    }
    DB.saveMatch(new Match(seasonID));
}






