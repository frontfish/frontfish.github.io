Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	game.input.onDown.add(this.click, this);

	A.grid = new Grid();
	A.grid.addPossible('queen');
	A.grid.addPossible('filled');

	game.add.sprite(0, 0, 'grid');

	A.pieces = game.add.group();

	A.queens = [];

	this.paint();
    },

    update: function () {

    },

    updateGrid: function () {
	var filled = [];
	A.grid.clear();
	
	for (var i = 0; i < A.queens.length; i++) {
	    q = A.queens[i];

	    A.grid.addPiece(q[0], q[1], 'queen', true);
	    this.generateFilled(q[0], q[1]);
	}	
    },

    paint: function () {
	var value;

	A.pieces.removeAll(true);

	for (var j = 0; j < A.grid.rows; j++) {
	    for (var i = 0; i < A.grid.columns; i++) {
		value = A.grid.contentsOf(i, j);
		if (value) {
		    A.pieces.create(this.gridToPixels(i), this.gridToPixels(j), value);
		}
	    }
	}

	for (j = 0; j < 8 - A.queens.length; j++) {
	    A.pieces.create(this.gridToPixels(8) + 1, this.gridToPixels(j) + 1, 'queen');
	}
    },

    generateFilled: function (x, y) {
	// horizontally
	for (var i = 0; i < A.grid.columns; i++) {
	    A.grid.addPiece(i, y, 'filled');
	}

	// vertically
	for (var j = 0; j < A.grid.rows; j++) {
	    A.grid.addPiece(x, j, 'filled');
	}

	// diagonally
	i = x, j = y;
	while (i >= 0 && j >= 0) {
	    A.grid.addPiece(i--, j--, 'filled');
	}
	i = x, j = y;
	while (i >= 0 && j < A.grid.rows) {
	    A.grid.addPiece(i--, j++, 'filled');
	}
	i = x, j = y;
	while (i < A.grid.columns && j >= 0) {
	    A.grid.addPiece(i++, j--, 'filled');
	}
	i = x, j = y;
	while (i < A.grid.columns && j < A.grid.rows) {
	    A.grid.addPiece(i++, j++, 'filled');
	}
    },

    click: function () {
	var x = this.pixelsToGrid(game.input.x);
	var y = this.pixelsToGrid(game.input.y);

	if (x >= A.grid.columns) {
	    A.queens = [];
	}
	else if (y < A.grid.rows) {
	    this.updateGrid();

	    if (A.grid.contentsOf(x, y)) {
		this.removeQueen(x, y);
	    }
	    else {
		this.addQueen(x, y);
	    }
	}
	this.updateGrid();
	this.paint();
    },

    addQueen: function (x, y) {
	if (A.queens.length < 8) {
	    A.queens.push([x, y]);
	}
	
	if (A.queens.length === 8) {
	    this.endPlay();
	}

	return this;
    },

    removeQueen: function (x, y) {
	for (var i = 0; i < A.queens.length; i++) {
	    var q = A.queens[i];
	    if (q[0] === x && q[1] === y) {
		A.queens.splice(i, 1);
	    }
	}
	return this;
    },

    gridToPixels: function (num) {
	return 3 + 37 * num;
    },

    pixelsToGrid: function (num) {
	ret = Math.floor((num - 3) / 37);

	return ret === -1 ? 0 : ret;
    },

    endPlay: function (num) {
	game.state.start('End');
    },
};
