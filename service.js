const { DB } = require("./db");
const { Player } = require("./entities/player");



exports.addPlayer = function(name, nickname) {
    const isNicknameUsed = DB.players.some(x => x.nickname == nickname);

    if(isNicknameUsed) {
        return "Apelido " + nickname + " ja  usado mané!";
    }

    DB.savePlayer(new Player(name, nickname));
}

