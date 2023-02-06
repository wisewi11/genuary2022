howBig = 10;
indentation=30

let img;
function preload() {
  img = loadImage('colorblend.png');
}
  
function setup() {
  createCanvas(400, 400);
  fill(random(170,255),random(170,255),random(170,255))
  
}

function draw() {
  background(img);
  
  for (var y = 0; y < height; y += 3 * howBig) {
    if (indentation==30){
      indentation=0
    }
    else{
      indentation=30
    }
    
    for (var x = -50; x < width; x += 6 * howBig) {
      
      beginShape();
      vertex(x+indentation,y);
      vertex(x+indentation,y+3*howBig)
      vertex(x+howBig+indentation,y+3*howBig)
      vertex(x+howBig+indentation,y+2*howBig)
      vertex(x+howBig*4+indentation,y+2*howBig)
      vertex(x+howBig*4+indentation,y+3*howBig)
      vertex(x+howBig*5+indentation,y+3*howBig)
      vertex(x+howBig*5+indentation,y)
      vertex(x+howBig*4+indentation,y)
      vertex(x+howBig*4+indentation,y+howBig)
      vertex(x+howBig+indentation,y+howBig)
      vertex(x+howBig+indentation,y)
      vertex(x+indentation,y)
      endShape()
    }
  }
}
