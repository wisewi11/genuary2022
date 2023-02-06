let sizeUp = 400
let x = 0
let y = 0
let weight = 50

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(5)
  strokeWeight(weight)
  
}

function draw() {
  fill(random(50,255),random(50,255) ,random(50,255) )
  
  square(x,y,sizeUp)
  x+=sizeUp
  if (x>width){
    y+=sizeUp
    x=0
  }
  if(y>height){
    x=0
    y=0
    sizeUp/=2
    frameRate(frameRate()*4)
    weight/=1.5
    strokeWeight(weight)
  }
}
function mousePressed() {
  saveGif('gridgrid', 5);
  
  
    
  
}