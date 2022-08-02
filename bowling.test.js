const Game = require("./bowling");

fdescribe('bowling', () => {
    test('roll 0', () => {
        const game = new Game();
        expect(game.score).toEqual(0);
    });
    test('roll 3', () => {
        const game = new Game();
        game.roll(1);
        game.roll(2);
        expect(game.score).toEqual(3);
    });
    test('roll 5', () => {
        const game = new Game();
        game.roll(1);
        game.roll(4);
        expect(game.score).toEqual(5);
    });
    test('roll mutliple frames', () => {
        const game = new Game();
        game.roll(1);
        game.roll(4);
        game.roll(6);
        expect(game.score).toEqual(11);
    });
    xtest('strike', () => {
       const game = new Game();
       game.roll(10);
       game.roll(5);
       expect(game.score).toEqual(20);
    });
})
