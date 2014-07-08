Game = {};

A = {
    w: 338,
    h: 300,

    queens: [],
};

Math.rand = function (max) {
    return Math.floor(Math.random() * max);
};

Game.Boot = function (game) { };

Game.Boot.prototype = {
    preload: function () {
	// load images for loading screen
	game.load.image('grid', 'assets/img/grid.png');
	game.load.image('queen', 'assets/img/circle.png');
	game.load.image('filled', 'assets/img/full.png');

	game.load.image('text-menu', 'assets/img/text-menu.png');
	game.load.image('text-end', 'assets/img/text-end.png');
    },

    create: function () {
	game.state.start('Menu');
    }
};

