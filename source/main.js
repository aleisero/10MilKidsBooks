//10 Million Children's Books
//a generative project by Amanda Leiserowitz & J. Alexander Carney
// :3

var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var pg1, pg2, pg3;
var body;
var grammar;

function preload() {
	// preload assets
	
	storyReset();
}

function storyReset() {
	//empty strings to print story pages to screen
	pg1 = '';
	pg2 = '';
	pg3 = '';
	
	grammar = tracery.createGrammar(storyGrammar);
	var story = grammar.flatten('#origin#');
	var pg = 1;
	
	//loop to fill story page strings w/ story from grammar
	for (var i = 0; i < story.length; i++) {
		let curChar = story.charAt(i);
		if(curChar === '$') {
			pg++;
		}
		else if (pg === 1) {
			pg1 = pg1 + curChar;
		}
		else if (pg === 2) {
			pg2 = pg2 + curChar;
		}
		else if (pg === 3) {
			pg3 = pg3 + curChar;
		}
	}
}

function create() {
	//set BG color
	game.stage.backgroundColor = "#facade"
	
	//place text
	style = {font: "25px Arial", fill: "#000000", align: "center", boundsAlignH: "center", boundsAlignV: "middle"};
	body = game.add.text(0, 0, pg1, style);
	body.setTextBounds(0, 0, game.world.width, 300);
	
}

function update() {
	//update function
	if (game.input.keyboard.justPressed(Phaser.Keyboard.RIGHT)) {
		nextPage();
	}
	else if (game.input.keyboard.justPressed(Phaser.Keyboard.LEFT)) {
		prevPage();
	}
}

function nextPage(){
	if(body.text == pg1) {
		body.setText(pg2);
	}
	else if(body.text == pg2) {
		body.setText(pg3);
	}
}

function prevPage(){
	if(body.text == pg3) {
		body.setText(pg2);
	}
	else if(body.text == pg2) {
		body.setText(pg1);
	}
}