let movers=[];
let img
let attractor;
let i=0;
function preload(){
  blackHole = loadImage('blackhole.png')
  
}
function setup() {
  createCanvas(600, 600);
  for (let i = 0;i<30;i++){
    let x = random(-width/3,width/3)+width/2
    let y = random(-height/3,height/3)+height/2
    let m = random(50,150)
    movers[i] = new Mover(x,y,m)
    
  }
  
  attractor = new Attractor(width/2,height/2,50)
  background(0)
}

function draw() {
  background(0,5);
  // image(blackHole,width/2,height/2,20,20)
  for(let mover of movers){
  mover.update();
  
  fill(noise(frameCount/60+i*1000)*255,noise(frameCount/60+i*1000+5000)*255,noise(frameCount/60+i*1000+10000)*255)
  mover.show();
  
  attractor.attract(mover);
  
}
  attractor.show();
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}