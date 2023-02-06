var len = 40;

var tracker = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  rotate(PI / 4);
  background(0);
  stroke(153,101,21)
  for (var y = -400; y < height; y+=len) {
    tracker+=1
    for (var x = -400; x < width+400; x+=len) {
      if (tracker % 2 == 0) {
        noFill();
        square(x, y, len);
        square(x,y,len*6/10)
        square (x,y,len*2/5)
        fill(255, 253, 208)
        square(x,y,len*4/20)
        
      } 
      
      
      else {
        noFill()
        square(x,y,len)
        square(x,y,len*8/10)
        square(x-len*4/10,y,len*5/10)
        square(x+len*4/10,y,len*5/10)
        square(x,y-len*4/10,len*5/10)
        square(x,y+len*4/10,len*5/10)
        
        fill(225, 193, 110)
        square(x,y,len*4/20)
      }

      tracker += 1;
    }
  }
}
