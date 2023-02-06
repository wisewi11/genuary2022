let img;
function preload() {
  img = loadImage('hm.png');
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(246);
  textSize(32);
  text('I used to be indecisive,', 10, 60);
  text('But now I\'m not too sure',10,92)
  
  push()
  translate(height/2,width/2)
  rotate(frameCount)
  image(img,-50,-50,50,50)
  
}
function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}