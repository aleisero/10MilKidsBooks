//10 Million Children's Books
//a generative project by Amanda Leiserowitz & J. Alexander Carney
// :3

var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
	// preload assets
	//var tracery = require('tracery-grammar');
	
	var grammar = tracery.createGrammar({
	'animal': ['panda','fox','capybara','iguana'],
	'emotion': ['sad','happy','angry','jealous'],
	'origin':['I am #emotion.a# #animal#.'],
	});

	//grammar.addModifiers(tracery.baseEngModifiers); 

	console.log(grammar.flatten('#origin#'));
}

function create() {
	//set BG color
	game.stage.backgroundColor = "#80ccff"
	
}

function update() {
	//update function
}