Game.Menu = function (game) { };

Game.Menu.prototype = {
    create: function () {
	game.add.sprite(0, 0, 'grid');
	game.add.sprite(0, 0, 'text-menu');

	for (var j = 0; j < 8; j++) {
	    game.add.sprite(Game.Play.prototype.gridToPixels(8) + 1, Game.Play.prototype.gridToPixels(j) + 1, 'queen');
	}

	game.input.onDown.add(function () {
	    game.state.start('Play');
	}, this);
    },

    update: function () {

    },
};
