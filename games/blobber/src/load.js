Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	var loading, loadText;

	// create loading screen
	game.stage.backgroundColor = "#666";
	
	loading = game.add.sprite(Game.w / 2, Game.h / 2, 'loading-color');
	loading.x -= loading.width / 2;
	loading.anchor.y = 0.7;

	game.load.setPreloadSprite(loading);

	loadText = game.add.text(Game.w / 2 - 63, Game.h / 2 + 12, 'loading...', { font: '40px Arial', fill: '#aaaaaa' });

	// load everything
	game.load.image('purple', 'assets/img/square-purple.png');
	game.load.image('blue', 'assets/img/square-blue.png');
	game.load.image('green', 'assets/img/square-green.png');
	game.load.image('lime', 'assets/img/square-lime.png');
	game.load.image('orange', 'assets/img/square-orange.png');
	game.load.image('pink', 'assets/img/square-pink.png');
	game.load.image('grey', 'assets/img/square-grey.png');

	game.load.image('frame', 'assets/img/frame.png');

	game.load.image('title', 'assets/img/title.png');

	game.load.audio('music', 'assets/aud/Ouroboros.mp3');
	Game.music = game.add.sound('music');
	Game.audio = true;

	game.load.audio('die-high', 'assets/aud/die-high.wav');
	game.load.audio('die-low', 'assets/aud/die-low.wav');
	game.load.audio('eat-wayhigh', 'assets/aud/eat-wayhigh.wav');
	game.load.audio('eat-high', 'assets/aud/eat-high.wav');
	game.load.audio('eat-medium', 'assets/aud/eat-medium.wav');
	game.load.audio('eat-low', 'assets/aud/eat-low.wav');
	game.load.audio('eat-waylow', 'assets/aud/eat-waylow.wav');

	Game.sounds = { die: {}, eat: {} };
	Game.sounds.die.high = game.add.sound('die-high');
	Game.sounds.die.low = game.add.sound('die-low');
	Game.sounds.eat.wayhigh = game.add.sound('eat-wayhigh');
	Game.sounds.eat.high = game.add.sound('eat-high');
	Game.sounds.eat.medium = game.add.sound('eat-medium');
	Game.sounds.eat.low = game.add.sound('eat-low');
	Game.sounds.eat.waylow = game.add.sound('eat-waylow');

	game.stage.disableVisibilityChange = true;
    },

    create: function () {
	game.state.start('Menu');
    }
};
