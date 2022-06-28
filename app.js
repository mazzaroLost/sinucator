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



const s1 = new Season()

const p1 = new Player("Gust", "Lost", []);
const p2 = new Player("Dan", "Buddha", []);

const m1 = new Match(01)

DB.players.push(p1);
DB.players.push(p2);


console.log(DB.players);