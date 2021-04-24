
class Utils {
    static getPossibleComb() {
        return [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
    }

    static getIndex(value) {
        return {
            x: Math.floor(value / 3),
            y: value % 3,
        }
    }

}
 

module.exports.Utils = Utils