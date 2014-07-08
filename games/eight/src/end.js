Game.End = function (game) { };

Game.End.prototype = {
    create: function () {
	game.add.sprite(0, 0, 'grid');
	game.add.sprite(0, 0, 'text-end');

	game.input.onDown.add(function() {
	    game.state.start('Menu');
	}, this);
    },
};
