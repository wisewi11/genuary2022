function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(30);
  
  rotateX(frameCount)
  
  noFill()
  stroke(255)
  for (var i = 0; i<50; i++){
    
    var r = map(sin(frameCount/2),-1,1,100,200)
    var g = map(i,0,50,100,255)
    var b = map(cos(frameCount),-1,1,200,100)
    
    stroke(r,g,b)
    rotate(frameCount)
    
    beginShape()
    for (var j = 0; j<360; j+=120){
      var rad = i*3
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount*2 + i*5) * 50
      
      vertex(x,y,z)
    }
    
    endShape(CLOSE)
  }
              
      
    
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}