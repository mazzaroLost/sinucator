const { DB } = require("./db");
const { Match } = require("./entities/match");
const { Player } = require("./entities/player");
const { PlayerMatch } = require("./entities/playerMatch");
const { Season } = require("./entities/season");
const { SeasonRanking } = require("./entities/seasonRanking");
const { SeasonRankingPlayer } = require("./entities/seasonRankingPlayer");
const { SeasonType } = require("./entities/seasonType");

const sType1 = new SeasonType("par/impar", "individual");
const sType2 = new SeasonType("par/impar", "dupla");
DB.saveSeasonType(sType1);
DB.saveSeasonType(sType2);

const s1 = new Season(0, "season01", "XX/XX/XX", "xx/xx/xx", []);
DB.saveSeason(s1);

const p1 = new Player("Gustavo", "lost", []);
const p2 = new Player("Danilo", "Renatinho Mãozinha", []);
DB.savePlayer(p1);
DB.savePlayer(p2);

const m1 = new Match(0, [])
const m2 = new Match(0, []);
const m3 = new Match(0, []);
DB.saveMatch(m1);
DB.saveMatch(m2);
DB.saveMatch(m3);

const pm1w = new PlayerMatch(0, m1, true);
const pm1l = new PlayerMatch(0, m1, false);
const pm2w = new PlayerMatch(0, m2, true);
const pm2l = new PlayerMatch(0, m2, false);
const pm3w = new PlayerMatch(0, m2, true);
const pm3l = new PlayerMatch(0, m2, false);
DB.savePlayerMatch(pm1w);
DB.savePlayerMatch(pm1l);
DB.savePlayerMatch(pm2w);
DB.savePlayerMatch(pm2l);
DB.savePlayerMatch(pm3w);
DB.savePlayerMatch(pm3l);

const sr1 = new SeasonRanking(0, []);
DB.saveSeasonRanking(sr1);

const srp1 = new SeasonRankingPlayer(0, [], []);
DB.saveSeasonRankingPlayer(srp1);

DB.seasonTypes.push(sType1);
DB.seasonTypes.push(sType2);

DB.seasons.push(s1);

DB.players.push(p1);
DB.players.push(p2);

DB.matches.push(m1);
DB.matches.push(m2);
DB.matches.push(m3);

DB.playerMatches.push(pm1w);
DB.playerMatches.push(pm1l);
DB.playerMatches.push(pm2w);
DB.playerMatches.push(pm2l);
DB.playerMatches.push(pm3w);
DB.playerMatches.push(pm3l);

DB.seasonRankings.push(sr1);

DB.seasonRankingPlayers.push(srp1);

