let R = (a=1)=>Math.random()*a;
let L = (x,y)=>(x*x+y*y)**0.5; // Elements by Euclid 300 BC

function setup() {
  createCanvas(800, 800);
  background('#432');
  
}

function draw_circle([x,y],r,c) {
  noStroke(); fill(c);
  circle((x+1)*width/2, (y+1)*width/2, r/2);
}

function sdf_circle([x,y], [cx,cy], r) {
  x -= cx;
  y -= cy;
  return L(x, y) - r;
}

function sdf_box([x,y], [cx,cy], [w,h]) {
  x -= cx;
  y -= cy;
  return k(abs(x)-w, abs(y)-h);  
}

let k = (a,b)=>a>0&&b>0?L(a,b):a>b?a:b;

function sdf_rep(x, r) {
  x/=r;
  x -= Math.floor(x)+.5;
  x*=r;
  return x;
}

function sdf([x,y]) {
  // let bal = sdf_circle([x,y], [.3,.3], .4);
  // let lin = abs(y)-.3;
  // let lin2 = abs(x)-.3;
  // bal = abs(bal) - .1;
  // bal = abs(bal) - .05;
  // x = abs(x) - .5;
  let bal = (sdf_rep(sdf_circle([x,y], [-.2,0], .1),.2))-.05;
  let bbl = (sdf_rep(sdf_circle([x,y], [.2,0], .1),.2))-.05;
  let bbb = (sdf_rep(sdf_circle([x,y], [0,.2], .1),.2))-.05;
  let bbbb = (sdf_rep(sdf_circle([x,y], [0,-.2], .1),.2))-.05;
  let box = (sdf_box([x,y],[0,0],[5,5]))
  return max(bal, bbl,bbb,bbbb,box);
}

// if (k(abs(x)-.8, abs(y)-.8) < 0) {
//   // draw stuff
  
// }

function draw() {
  for (let k = 0; k < 1000; k++) {
    let p = [R(2)-1, R(2)-1];
    let d = sdf(p);
    let col = 'white';
    if (d < -.01) col = 'violet';
    if (d > .01) col = 'rebeccapurple';
    draw_circle(p, 2, col);    
  }
}
function mousePressed() {
  // this will download the first 5 seconds of the animation!
  
    saveGif('mySketch', 5);
  
}