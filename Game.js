
var Square = require('./Square').Square;
const Utils = require('./Utils').Utils

class Game {
    #board
    #users
    #turn
    #winner
    constructor() {
        this.#board = this.getInitState()
        
        this.#users = ["X", "Y"]
        this.#turn = 0
        this.#winner = ""
    }

    get Board() {
        return this.#board
    }

    set Board(board) {
        this.#board = board
    }

    get Winner() {
        return this.#winner
    }

    set Winner(winner) {
        return this.#winner = winner
    }

    get Users() {
        return this.#users
    }

    get Turn() {
        return this.#turn
    }

    set Turn(turn) {
        this.#turn = turn
    }

    getInitState() {
        return [
            [new Square(0, 0), new Square(0, 1), new Square(0, 2)],
            [new Square(1, 0), new Square(1, 1), new Square(1, 2)],
            [new Square(2, 0), new Square(2, 1), new Square(2, 2)],
        ]
    }

    fillSquare(i, j) {
        try {
            let currentCell = this.Board[i][j]
            if(currentCell.isFilled()) {
                throw "This cell already filled. invlaid move"
            }

            if(this.Winner != "") {
                throw "winner declared. Reset the Game"
            }

            let user = this.Users[this.Turn]

            currentCell.Value = user

            debugger;

            this.Board[i][j] = currentCell
            this.Turn = (this.Turn + 1) % 2

            this.checkWinner()

            return  {
                data: user,
                code: "success"
            }
        } catch(err) {
            return {
                err,
                code: "failed"
            }
        }
    }

    checkWinner() {
        try {
            let comb = Utils.getPossibleComb()
            for(let i=0; i<comb.length; i++) {
                let cc = comb[i];
                if(this.getCell(cc[0]).isFilled() && 
                    (this.getCell(cc[0]).Value === this.getCell(cc[1]).Value) && 
                    (this.getCell(cc[0]).Value === this.getCell(cc[2]).Value)) {
                        this.Winner = this.getCell(cc[0]).Value;
                }
            }

        } catch(err) {
            console.log(err)
        }
    }

    resetGame() {
        try {
            this.Board = this.getInitState()   
            this.Winner = ""
            this.Turn = 0
            
            return  {
                data: "game reset done",
                code: "success"
            }

        } catch(err) {
            return {
                err,
                code: "failed"
            }
        }
    }

    getCell(i) {
        let cord = Utils.getIndex(i)

        return this.Board[cord.x][cord.y]
    }

    printBoard() {
        this.Board.map(row => {
            console.log(row[0].Value, row[1].Value, row[2].Value)
        })
    }
}

module.exports.Game = Game