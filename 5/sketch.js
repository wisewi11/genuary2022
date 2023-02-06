let angle = 0;
let imgLadybug;
var xInc=2
var yInc=2
var joe =2
// var font = ['Helvetica','monospace','Georgia','Times New Roman','Verdana']
function preload(){
  imgLadybug = loadImage('ladybug.png')
  imgAnt= loadImage('ant-transparent-15.png')
}
function setup() {
  createCanvas(400, 400);
  frameRate(30)
  
  
  
}

function draw() {
  background('yellow');
  image(imgLadybug,390-frameCount,390-frameCount,50,50)
  
  push()
  translate(200,200)
  rotate(frameCount/10)
  image(imgAnt,-15,-15,30,30)
  pop()
  
  push()
  translate(300,300)
  rotate(frameCount/10)
  image(imgAnt,-15,-15,30,30)
  pop()
  
  push()
  translate(250,50)
  rotate(frameCount/10)
  image(imgAnt,-15,-15,30,30)
  pop()
  
  push()
  translate(25,320)
  rotate(frameCount/10)
  image(imgAnt,-15,-15,30,30)
  pop()
  
  push()
  translate(50,75)
  rotate(frameCount/10)
  image(imgAnt,-15,-15,30,30)
  pop()
  
  textFont('monospace')
  
  
  
  push()
  textSize(random(50))
  fill('red')
  text('Error',random(400),random(400))
  text('Error',random(400),random(400))
  text('Error',random(400),random(400))
  pop()
  
  
  textSize(30)
  text('How\'s everyone\'s day?',50,yInc)
  
 
  textSize(70)
  rotate(PI/3.0)
  text('Weeeeee',xInc,100)
  
  
  
  
  if (xInc>370){
    joe= -2
  }
  if(xInc==0){
    joe=2
  }
  xInc+=joe
  yInc+=joe
  
  
  
}
function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 8);
  }
}
