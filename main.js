//10 Million Children's Books
//a generative project by Amanda Leiserowitz & J. Alexander Carney
// :3

function setup() {
	var button = createButton("next");
	button.mousePressed(nextPage);
	
	createCanvas(640,640);
	console.log("javascript main");

}

function nextPage() {
	console.log("next");
}

function draw () {
	background(128);

}