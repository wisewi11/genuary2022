let x, y;

function setup() {
  createCanvas(800, 800);
  background(0);
  x = random(width);
  y = random(height);
}

function draw() {
  let r = random(1);
  if (r < 0.1) {
    x = random(width);
    y = random(height);
  } else if (r < 0.2) {
    x += random(-10, 10);
    y += random(-10, 10);
  } else if (r < 0.3) {
    x += random(-30, 30);
    y += random(-30, 30);
  } else if (r < 0.4) {
    x += random(-50, 50);
    y += random(-50, 50);
  } else {
    x += random(-5, 5);
    y += random(-5, 5);
  }
  x = constrain(x, 0, width-1);
  y = constrain(y, 0, height-1);
  stroke(255);
  
  // ellipse(x,y,random(10,70))
  
  
  
  
  strokeWeight(random(0,2))
  
  for (let i = 0; i < 10; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    stroke(random(255), random(255), random(255));
    line(x1, y1, x2, y2);
  }
}