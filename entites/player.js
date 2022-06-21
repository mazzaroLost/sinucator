//1 jogador
//id                      jogadorID
//string                  nome
//string                  apelido
//jogadorPartida[]        partidas
//
//
//

function playerCreate(playerID, name, nickName) {
    return {
        "playerID": playerID,
        "name": name,
        "nickName": nickName
    }
}
var o = playerCreate(1, "Gustavo", "Lost");
console.log(o);
var a = playerCreate(2, "Danilo", "Bhudda");
console.log(a);