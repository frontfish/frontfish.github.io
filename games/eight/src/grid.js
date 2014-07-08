Grid = function (columns, rows) {
    this.possible = {
	queen: 'queen',
    },
    this.columns = columns || 8;
    this.rows    = rows    || 8;

    // create empty grid
    this.grid = [];
    for (var i = 0; i < this.columns; i++) {
	this.grid[i] = [];
	for (var j = 0; j < this.rows; j++) {
	    this.grid[i][j] = '';
	}
    };
};

Grid.prototype = {
    contentsOf: function (x, y) {
	return this.grid[x][y];
    },

    addPiece: function (x, y, piece, force) {
	force = force || false;

	if (force) {
	    this.addPossible(piece);
	    this.grid[x][y] = piece;
	}

	if (this.possible[piece] && !this.contentsOf(x, y)) {
	    this.grid[x][y] = piece;
	}

	return this;
    },

    removePiece: function (x, y) {
	this.grid[x][y] = '';
	return this;
    },

    movePiece: function (oldX, oldY, newX, newY, force) {
	var piece = this.contentsOf(oldX, oldY);
	if (piece) {
	    if (this.addPiece(newX, newY, piece, force)) {
		this.removePiece(oldX, oldY);
	    }
	}
	return this;
    },

    clear: function () {
	for (var i = 0; i < this.columns; i++) {
	    this.grid[i] = [];
	    for (var j = 0; j < this.rows; j++) {
		this.grid[i][j] = '';
	    }
	}
	return this;
    },

    addPossible: function (value) {
	this.possible[value] = value;
	return this;
    },

    toString: function (div) {
	var ret = '';
	div = div || ', ';

	for (var j = 0; j < this.rows; j++) {
	    for (var i = 0; i < this.columns; i++) {		
		ret += this.contentsOf(i, j) + div;
	    }
	    ret += '\n';
	}

	return ret;
    },
};

Grid.prototype.constructor = Grid;
