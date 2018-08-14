//10 Million Children's Books
//a generative project by Amanda Leiserowitz & J. Alexander Carney
// :3

//phasergames.com/using-google-fonts-phaser & phaser.io/examples/v2/text/google-webfonts
WebFontConfig = {
	active: function() {
		game: time.events.add(Phaser.Timer.SECOND, createText, this);
	},
	
	google: {families: ["Courgette", "Cabin Sketch", "Space Mono", "Pangolin", "Share Tech Mono", "VT323", "Sue Ellen Francisco", "IM Fell English", "Fondamento", "Shojumaru"] }
};

var game = new Phaser.Game(750, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });

//global variables
var pg0, pg1, pg2, pg3;
var body, grammar, resetButton, textFont, resetButton;
var isFirst = true;

//asset variables
var spread;
var setting;
var character;
var book, flip, crumple;

function preload() {
	//preload UI images
	game.load.image('resetButton', 'assets/resetButton.png');
	game.load.image('nextButton', 'assets/nextButton.png');
	
	//preload environment images
	game.load.image('cover', 'assets/cover.png');
	game.load.image('spread', 'assets/spread.png');
	game.load.image('wood', 'assets/wood.jpg');
	
	//preload setting images
	game.load.image('castle', 'assets/castle.jpg');
	game.load.image('city', 'assets/city.jpg');
	game.load.image('faraway land', 'assets/faraway land.jpg');
	game.load.image('forest', 'assets/forest.jpg');
	game.load.image('home', 'assets/home.jpg');
	game.load.image('park', 'assets/park.jpg');
	game.load.image('school', 'assets/school.jpg');
	game.load.image('swamp', 'assets/swamp.jpg');
	game.load.image('galaxy', 'assets/galaxy.jpg')
	
	//preload character images
	game.load.image('princess', 'assets/princcess.png');
	game.load.image('prince', 'assets/prince.png');
	game.load.image('knight', 'assets/knight.png');
	game.load.image('horse', 'assets/horse.png');
	game.load.image('unicorn', 'assets/unicorn.png');
	game.load.image('bear', 'assets/bear.png');
	game.load.image('frog', 'assets/frog.png');
	game.load.image('fox', 'assets/fox.png');
	game.load.image('owl', 'assets/owl.png');
	game.load.image('geko', 'assets/geko.png');
	game.load.image('panda', 'assets/panda.png');
	game.load.image('poof', 'assets/poof.png');
	game.load.image('trex', 'assets/trex.png');
	
	//preload SFX
	//https://freesound.org/people/fellur/sounds/429724/
	game.load.audio('book', 'assets/book page.ogg');
	//https://freesound.org/people/ROFD/sounds/188485/
	game.load.audio('flip', 'assets/flip page.ogg');
	//https://freesound.org/people/j1987/sounds/106127/
	game.load.audio('crumple', 'assets/crumple.ogg');
}

var storyReset = function() {
	//empty strings to print story pages to screen
	pg0 = '';
	pg1 = '';
	pg2 = '';
	pg3 = '';
	
	grammar = tracery.createGrammar(storyGrammar);
	var story = grammar.flatten('#origin#');
	var pg = 0;
	
	//loop to fill story page strings w/ story from grammar
	for (var i = 0; i < story.length; i++) {
		let curChar = story.charAt(i);
		if(curChar === '$') {
			pg++;
		}
		else if (pg === 0) {
		pg0 = pg0 + curChar;
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
	
	var rndNum = game.rnd.frac();
	
	//choose a font for the story
	if (rndNum < 0.1) {
		textFont = "Cabin Sketch";
	}
	else if (rndNum < 0.2) {
		textFont = "Courgette";
	}
	else if (rndNum < 0.3) {
		textFont = "Space Mono";
	}
	else if (rndNum < 0.4) {
		textFont = "Pangolin";
	}
	else if (rndNum < 0.5) {
		textFont = "Share Tech Mono";
	}
	else if (rndNum < 0.6) {
		textFont = "VT323";
	}
	else if (rndNum < 0.7) {
		textFont = "Sue Ellen Francisco";
	}
	else if (rndNum < 0.8) {
		textFont = "IM Fell English";
	}
	else if (rndNum < 0.9) {
		textFont = "Fondamento";
	}
	else {
		textFont = "Shojumaru";
	}
	
	
	if(!isFirst){
		body.font = textFont;
		body.setText(pg0);
		spread.visible = false;
		setting.visible = false;
		character.visible = false;
		if(game.rnd.frac() > 0.5){
			character.scale.setTo(-1, 1);
		}
		crumple.play();
	}
	else {
		isFirst = false;
		game.add.image(335, 0, 'cover');
	}
		
	console.log(pg0);
	console.log(pg1);
	console.log(pg2);
	console.log(pg3);
}

function create() {
	//set BG
	game.add.image(0, 0, 'wood');
	
	storyReset();
	
	//place text
	style = {
		font: "25px " + textFont, 
		fill: "#000000", 
		align: "center", 
		boundsAlignH: "center", 
		boundsAlignV: "middle",
		wordWrap: true,
		wordWrapWidth: 300
		};
	body = game.add.text(0, 0, '', style);
	body.text = pg0;
	body.setTextBounds(335, 0, 415, 500);
	
	//place reset button
	resetButton = game.add.image(10, game.world.height - 60,"resetButton");
	resetButton.inputEnabled = true;
	resetButton.events.onInputDown.add(storyReset, this);
	
	//place next button
	nextButton = game.add.image(game.world.width - 60, game.world.height - 60,"nextButton");
	nextButton.inputEnabled = true;
	nextButton.events.onInputDown.add(nextPage, this);
	
	spread = game.add.image(6, 0, 'spread');
	spread.visible = false; 
	
	//place setting image
	setting = game.add.image(60, 90, 'forest');
	setting.scale.setTo(0.9,0.9);
	setting.visible = false;
	
	//place character image
	character = game.add.image(132, 306, 'panda');
	character.anchor.x = 0.5;
	character.anchor.y = 0.5;
	character.visible = false;
	
	//create sound assets
	book = game.add.audio('book');
	flip = game.add.audio('flip');
	crumple = game.add.audio('crumple');
}

function update() {
	//keep text on top of images
	game.world.bringToTop(body);
	game.world.bringToTop(resetButton);
	game.world.bringToTop(nextButton);
}

function nextPage(){
	//randomly choose one of two page turning SFX
	if(game.rnd.frac() > 0.5){
		book.play();
	}
	else {
		flip.play();
	}
	
	//Go to next page depending on current page
	if (body.text == pg0) {
		body.setText(pg1);
		spread.visible = true;
		findSetting(pg1);
		findCharacter(pg1);
		setting.visible = true;
		character.visible = true;
	}
	else if(body.text == pg1) {
		body.setText(pg2);
		findSetting(pg2);
	}
	else if(body.text == pg2) {
		body.setText(pg3);
		findSetting(pg3);
	}
	else if(body.text == pg3){
		body.setText(pg0);
		spread.visible = false;
		setting.visible = false;
		character.visible = false;
	}
}

function findSetting(page){
	if(page.includes('castle'))
	{
		setting.loadTexture('castle');
	}
	else if(page.includes('city'))
	{
		setting.loadTexture('city');
	}
	else if(page.includes('faraway land'))
	{
		setting.loadTexture('faraway land');
	}
	else if(page.includes('forest'))
	{
		setting.loadTexture('forest');
	}
	else if(page.includes('galaxy'))
	{	
		setting.loadTexture('galaxy');
	}
	else if(page.includes('home'))
	{	
		setting.loadTexture('home');
	}
	else if(page.includes('park'))
	{	
		setting.loadTexture('park');
	}
	else if(page.includes('school'))
	{	
		setting.loadTexture('school');
	}
	else if(page.includes('swamp'))
	{	
		setting.loadTexture('swamp');
	}
}

function findCharacter(page){
	if(page.includes('bear'))
	{
		character.loadTexture('bear');
	}
	else if(page.includes('fox'))
	{
		character.loadTexture('fox');
	}
	else if(page.includes('frog'))
	{
		character.loadTexture('frog');
	}
	else if(page.includes('gecko'))
	{
		character.loadTexture('geko');
	}
	else if(page.includes('horse'))
	{	
		character.loadTexture('horse');
	}
	else if(page.includes('knight'))
	{	
		character.loadTexture('knight');
	}
	else if(page.includes('panda'))
	{	
		character.loadTexture('panda');
	}
	else if(page.includes('owl'))
	{	
		character.loadTexture('owl');
	}
	else if(page.includes('poof'))
	{	
		character.loadTexture('poof');
	}
	else if(page.includes('princess'))
	{	
		character.loadTexture('princess');
	}
	else if(page.includes('prince'))
	{	
		character.loadTexture('prince');
	}
	else if(page.includes('t-rex'))
	{	
		character.loadTexture('trex');
	}
	else if(page.includes('unicorn'))
	{	
		character.loadTexture('unicorn');
	}
}