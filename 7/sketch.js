// var cWhite = (231,229,227)
// var cGold = (232,210,137)
// var cPink = (236,199,208)
// var cBlue = (175,218,219)
// var cBlack = (75,74,76)
// var cBrown = (150,127,115)



var n = 0;
var c = 6;


var re = 0
var gr = 0
var bl= 0
var yo=0


// var points = [];

var start = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  
}

function draw() {
  background(frameCount);
  translate(width / 2, height / 2);
  rotate(n * 0.3);
  for (var i = 0; i < n; i++) {
    var a = i * 137.5;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    // var hu = sin(start + i * 0.1);
    // hu = map(hu, -1, 1, 0, 360);
    yo = random(0,100)
    if (yo<30){
      //white
      re=231
      gr=229
      bl=227
    }
    else if (yo>30 && yo<40){
      //gold
      re=232
      gr=210
      bl=137
    }
    else if(yo>40 && yo<65){
      //pink
      re=236
      gr=199
      bl=208
    }
    else if (yo>65 && yo<80){
      //blue
      re=175
      gr=218
      bl=219
    }
    else if(yo>80 && yo<90){
    //black
     re=75
      gr=74
      bl=76       
    }
    else{
    //brown
    re=150
      gr=127
      bl=115
            
    }
    
    
    fill(re,gr,bl)
    noStroke()
    ellipse(x, y, c+1, c+1);
  }
  n += 7;
  start += 0.1;
}
function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}
