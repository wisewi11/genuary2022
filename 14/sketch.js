

let x;
let y;
let yo=0;
let img;
function preload() {
  img = loadImage('ancient.png');
}
function setup() {
  createCanvas(400, 400);
  x = 0;
  y = 0;
  background(img);
  frameRate(2000)
}

function draw() {
  stroke(22,38,76);
  strokeWeight(3);
  
  point(x, y);
  const r = floor(random(4));
  switch (r) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x +1;
      break;
    case 2:
      y = y + 1;
      break;
    case 3:
      y = y-1;
      break;
  }
  
  if (x==width-1){
    x=0
    yo+=7
    y=yo

  }
  
}