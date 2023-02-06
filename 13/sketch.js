let n =0
let d = 0

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  translate(width/2,height/2)
  
  stroke(255)
  
  fill('purple')
  beginShape()
  strokeWeight(1)
  for (let i = 0; i<360; i++){
    
    let k=i * d
    let r = random(130,170)* sin(n*k)
    let x = r * cos(k)
    let y = r * sin(k)
    vertex(x,y)
  }
  endShape(CLOSE)
  
  noFill()
  stroke('red')
  strokeWeight(2)
  beginShape()
  
  for (let i = 0; i<361; i++){
    
    let k=i
    let r = 150* sin(n*k)
    let x = r * cos(k)
    let y = r * sin(k)
    vertex(x,y)
  }
  endShape()
  
  n+=0.02
  d+=0.2
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}