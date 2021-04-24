class Square {
    #value
    #x
    #y
    #initValue
    constructor(x, y) {
        this.#value = "."
        this.#x = x
        this.#y = y
        this.#initValue = "."
    }

    get Value() {
        return this.#value
    }

    set Value(v) {
        this.#value = v
    }

    get X() {
        return this.#x
    }

    get Y() {
        return this.#y
    }

    get InitValue() {
        return this.#initValue
    }

    isFilled() {
        if(this.Value == this.InitValue) return false;
        return true;
    }
}

module.exports.Square = Square