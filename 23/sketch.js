var s = 3;
var spacing = 5;
var k = 150;
var n = 0.01;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function warp(x, y) {
  return k * noise(x * n + frameCount/20+1000, y * n + frameCount/20+1000) ;
}

function draw() {
  background(255);
  fill(0);
translate(0,0)
  // let x = 0;
  // let y = 0;
  for (let x = -200; x < 200; x += spacing + s) {
    for (let y = -200; y < 200; y += spacing + s) {
      beginShape();
      p = [
        [x+random(-1,1), y+random(-1,1), warp(x, y)],
        [x+s+random(-1,1), y + s+random(-1,1), warp(x, y + s)],
        [x + s*2+random(-1,1), y +random(-1,1), warp(x + s, y + s)],
        [x + s+random(-1,1), y-s+random(-1,1), warp(x + s, y)],
        [x+random(-1,1), y+random(-1,1), warp(x, y)],
      ];
      p.forEach((e) => {
        vertex(...e);
      });
      endShape(CLOSE);
    }
  }
  // let z = 0
}