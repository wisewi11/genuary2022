// p5.glitch-image
// cc teddavis.org 2020

let glitch;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('image.png', function(im){
		glitch.loadImage(im);
	});
  
}

function draw() {
	glitch.resetBytes();

	glitch.replaceBytes(100, 104); // swap all decimal byte 100 for 104
	glitch.randomBytes(1); // add one random byte for movement

	glitch.buildImage();
	image(glitch.image, width/2, height/2)
}
function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 2);
  }
}