// p5.glitch-almost-everything
// cc teddavis.org 2020

let glitch;
let imagePath = 'coolnight.png';

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	// glitch.debug(); // debug info

	glitch.pixelate(.8); // hard pixels
	// glitch.errors(false); // no error messages

	// test loadBytes w/ callback
	glitch.loadBytes(imagePath, function() {
		glitch.randomBytes(50); // 50 random bytes
		// glitch.saveBytes('fish_glitch.png'); // toggle saveBytes()
	});

	glitch.loadType('jpg');
	glitch.loadQuality(.95)

	glitch.loadImage(imagePath); // glitch loadImage()
	loadImage(imagePath, function(img) {
		glitch.loadImage(img); // from p5.js loadImage()
	});

	glitch.debug(false); // turn off before draw()!
}

function draw() {
	glitch.resetBytes(); // fresh bytes
	// glitch.limitBytes(.4, .8) // limit bytes
    glitch.limitBytes(0.1,0.2)
    glitch.limitBytes(0.8,0.9)
	// glitch.randomByte(52) // single random
	// glitch.randomBytes(5) // 5 random
	glitch.randomBytes(5, 150) // 5 random pos, exact val
	glitch.replaceByte(53, 255); // single replace
	glitch.replaceBytes(123, '7c'); // all replace
	glitch.replaceHex('ffdb00430101', 'ffdb00430155');
	glitch.swapBytes(88, 100); // swap values
	glitch.buildImage();
	image(glitch.image, width / 2, height / 2)
}

function keyPressed() {
	if(key === 'I') { // image raw
		glitch.saveImage('fish_glitched');
	} else if(key === 'S') { // image safe
		glitch.saveSafe('fish_glitched');
	} else if(key === 'C') { // canvas
		glitch.saveCanvas('fish_glitched');
	}
}