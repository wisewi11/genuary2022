var speed = 0.4
var spacing = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let t = frameCount*speed
  background(random(0));
  for(let c = 0; c < TWO_PI; c+=TWO_PI/d){
    for(let r = 0; r<width; r+=spacing){
      fill(map(r,0,width,0,500))
      d = map(r,0,width,4,20)
      let mT = t*noise(r/1000)
      fill(random(0,255),random(0,255),random(0,255))
      square(r*cos(mT + c)+width/2,r*sin(mT+c)+height/2,4)
    }
  }
  
  
}