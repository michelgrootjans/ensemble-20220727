class Game {
    pinsKnocked = [];

    roll(pins) {
        this.pinsKnocked.push(pins);
    }

    get score() {
        return this.pinsKnocked.reduce((prev, next) => {
            return prev + next;
        }, 0);
    }
}

module.exports = Game;
