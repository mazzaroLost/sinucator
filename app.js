const { DB } = require("./db");
const { Match } = require("./entities/match");
const { Player } = require("./entities/player");
const { PlayerMatch } = require("./entities/playerMatch");
const { Season } = require("./entities/season");
const { SeasonRanking } = require("./entities/seasonRanking");
const { SeasonRankingPlayer } = require("./entities/seasonRankingPlayer");
const { SeasonType } = require("./entities/seasonType");

DB.savePlayer(new Player("Gustavo", "lost"));
DB.savePlayer(new Player("Danilo", "Renatinho"));


var mode = "individual";
var type = "3bolinhas";
var seasonType = DB.seasonTypes.find(p => p.type == type && p.mode == mode);
DB.saveSeason(new Season(seasonType.id, "temp 1", "2022-09-01", "2022-09-30"));

var s1 = DB.seasons.find(s => s.name == "temp 1");
var p1 = DB.players.find(p => p.name == "Gustavo");
var p2 = DB.players.find(p => p.name == "Danilo");


const m1 = new Match(s1.id);
DB.saveMatch(m1);
const m2 = new Match(s1.id);
DB.saveMatch(m2);


var pm1 = new PlayerMatch(p1.id, m1.id, true);
var pm2 = new PlayerMatch(p2.id, m1.id, false);

DB.savePlayerMatch(pm1);
DB.savePlayerMatch(pm2);


var pm3 = new PlayerMatch(p1.id, m1.id, true);
var pm4 = new PlayerMatch(p2.id, m1.id, false);

DB.savePlayerMatch(pm3);
DB.savePlayerMatch(pm4);

//console.log("temporada:"+ " "  + s1.name + ", modalidade: " + seasonType.type + " " + seasonType.mode);

//partida entre jogadores? $jogadornome, $jogadornome
// vencedor: $vencedorNome
//var tes = DB.findByNamePlayer("Danilo");
//console.log(tes);
//var tes1 = DB.findBySeason("temp 1");
//console.log(tes1);
//var tes2 = DB.filterBySeason("temp 1");
//console.log(tes2);
var tes3 = DB.filterByWinner("Gustavo");
console.log(tes3);













//const s1 = new Season(sType1.id, "season01", "XX/XX/XX", "xx/xx/xx", []);
//DB.saveSeason(s1);
//
//const p1 = new Player("Gustavo", "lost", []);
//const p2 = new Player("Danilo", "Renatinho", []);
//DB.savePlayer(p1);
//DB.savePlayer(p2);
//
//const m1 = new Match(s1.id, [])
//const m2 = new Match(s1.id, []);
//const m3 = new Match(s1.id, []);
//DB.saveMatch(m1);
//DB.saveMatch(m2);
//DB.saveMatch(m3);
//
//const pm1w = new PlayerMatch(p1.id, m1.id, true)
//const pm1l = new PlayerMatch(p2.id, m1.id, false);
//const pm2w = new PlayerMatch(p1.id, m2.id, true);
//const pm2l = new PlayerMatch(p2.id, m2.id, false);
//const pm3w = new PlayerMatch(p1.id, m3.id, true);
//const pm3l = new PlayerMatch(p2.id, m3.id, false);
//DB.savePlayerMatch(pm1w);
//DB.savePlayerMatch(pm1l);
//DB.savePlayerMatch(pm2w);
//DB.savePlayerMatch(pm2l);
//DB.savePlayerMatch(pm3w);
//DB.savePlayerMatch(pm3l);
//
//const sr1 = new SeasonRanking(s1.id, []);
//DB.saveSeasonRanking(sr1);
//
//const srp1 = new SeasonRankingPlayer(p1.id, [], []);
//DB.saveSeasonRankingPlayer(srp1);
//const srp2 = new SeasonRankingPlayer(p2.id, [], []);
//DB.saveSeasonRankingPlayer(srp2);
//
//console.log(DB.matches);
//console.log(DB.players);
//console.log(DB.playerMatches);
//console.log(DB.seasons);
//console.log(DB.seasonRankings);
//console.log(DB.seasonRankingPlayers);
//console.log(DB.seasonTypes);


