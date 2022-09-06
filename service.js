const { DB } = require("./db");
const { Match } = require("./entities/match");
const { Player } = require("./entities/player");
const { Season } = require("./entities/season");



exports.addPlayer = function(name, nickname) {
    const isNicknameUsed = DB.players.some(x => x.nickname == nickname);

    if(isNicknameUsed) {
        return "Apelido " + nickname + " ja  usado mané!";
    }

    DB.savePlayer(new Player(name, nickname));
}


exports.addMatch = function(seasonID, teams) {
    const match = new Match(seasonID, []);
    DB.saveMatch(match);

    for (var i = 0; i < teams.length; i++) {
        const team = teams[i];

        team.matchID = match.id;
        DB.saveTeam(team);
        match.teamIDs.push(team.id);
    }
}

exports.addSeason = function(type, mode, name, startedAt, endedAt) {
    const seasonType = DB.seasonTypes.find(p =>p.type == type && p.mode == mode);
    const isSeasonDuplicated = DB.seasons.some(x => x.name == name && x.seasonTypeID == seasonType.id);

    if (isSeasonDuplicated) {
        return "temporada com o nome" + name +"ja existe";
    }
    const season = new Season(seasonType.id, name, startedAt, endedAt)
    DB.saveSeason(season);
}






