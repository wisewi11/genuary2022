function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
}

function draw() {
  for (let i = 0; i <= width; i += 80) {
    for (let j = 0; j <= height; j += 80) {
      fill(random(255));
      push();
      translate(i, j);
      rotate(radians(random(360)));
      for (let k = 0; k < 10; k++) {
        ellipse(k * 20, 0, 20*random(0.5,4), 20*random(0.5,4));
      }
      pop();
    }
  }
}