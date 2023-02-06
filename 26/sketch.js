var big= 20
let img;
function preload() {
  img = loadImage('cutePark.png');
}
function setup() {
  createCanvas(400,300);
}

function draw() {
  background(255);
  fill('yellow')
  ellipse(width/2,height/2,200,200)
  
  fill(255)
  strokeWeight(3)
  ellipse(width/2-big*2,height/2,big*2,big*2)
  line(width/2-big*2,height/2+big,width/2-big*2,height-big*3)
  
  line(width/2-big*2,height-big*3,width/2-big*3,height-big*2)
  line(width/2-big*2,height-big*3,width/2-big,height-big*2)
  
  push()
  translate(0,-big*2)
  line(width/2-big*2,height-big*3,width/2-big*3,height-big*2)
  line(width/2-big*2,height-big*3,width/2-big,height-big*2)
  pop()
  
  
  ellipse(width/2+big*2,height/2,big*2,big*2)
  line(width/2+big*2,height/2+big,width/2+big*2,height-big*3)
  
  line(width/2+big*2,height-big*3,width/2+big*3,height-big*2)
  line(width/2+big*2,height-big*3,width/2+big,height-big*2)
  
  push()
  translate(0,-big*2)
  line(width/2+big*2,height-big*3,width/2+big*3,height-big*2)
  line(width/2+big*2,height-big*3,width/2+big,height-big*2)
  
  pop()
  
  
}