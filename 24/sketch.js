function setup() {
  createCanvas(800, 800);
  background(240);
  noStroke();
}

function draw() {
  for (let x = 0; x <= width; x += 25) {
    for (let y = 0; y <= height; y += 25) {
      push();
      translate(x, y);
      rotate(radians(random(360)));
      fill(random(255), random(255), random(255));
      if(random(2)<1){
        ellipse(0, 0, 30, 30);
      }else {
        rect(0,0,30,30);
      }
      pop();
    }
  }
}