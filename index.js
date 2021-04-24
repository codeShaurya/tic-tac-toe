var Game = require('./Game').Game

var game = new Game()
var res
res = game.fillSquare(0,0)
console.log(res)


res = game.fillSquare(1,1)
console.log(res)


res = game.fillSquare(0,1)
console.log(res)


res = game.fillSquare(1,2)
console.log(res)


res = game.fillSquare(0,2)
console.log(res)

res = game.fillSquare(2,2)
console.log(res)

res = game.resetGame()
console.log(res)

res = game.fillSquare(2,2)
console.log(res)


game.printBoard();
