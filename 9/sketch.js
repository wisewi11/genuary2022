

let angle = 0;
let joe
let sup = 10
function setup() {
  createCanvas(640, 360);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(0);
  joe = PI+frameCount/100
  
  angle = joe
  
  stroke(255);
  strokeWeight(2);
  translate(width * 0.5, height);
  branch(100);
}

function branch(len) {
  stroke(0,255,0)
  line(0, 0, 0, -len);
  translate(0,-len)
  rotate(PI/4)
  // branch(len*0.67)
constrain(joe,PI,TWO_PI)
  
  
  if (len > 5.5) {
    
    push();
    rotate(angle);
    branch(len * 0.75);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.75);
    pop();
  }
}
function mousePressed() {
  // this will download the first 5 seconds of the animation!
  
    saveGif('plant', 5);
  
}
