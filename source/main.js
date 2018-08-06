//10 Million Children's Books
//a generative project by Amanda Leiserowitz & J. Alexander Carney
// :3

var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	// preload assets
	
	var grammar = tracery.createGrammar(storyGrammar);
	
	console.log(grammar.flatten('#origin#'));
}

function create() {
	//set BG color
	game.stage.backgroundColor = "#80ccff"
	
}

function update() {
	//update function
}