var colors = ["#006494", "#247BA0", "#1B98E0", "#E8F1F2"];

var bg= 0
var spacing = 20
// ->
var videoDuration = 4
var fps = 30


function setup() {
  createCanvas(400, 400);
  frameRate(30)
}

function draw() {
  background(bg);
  // ->
  var time = millis()/1000
  var speed = TWO_PI/videoDuration  
  for(j = 0; j < 1200; j += spacing*(colors.length)){
    colors.forEach((color,i) => {
      fill(color)
      var circleSize = constrain((spacing * time) - (spacing * i) - j,0,Infinity)
      // var circleSize = constrain((spacing * time) - (spacing * i),0,Infinity)
      ellipse(height/2,width/2,circleSize,circleSize)
    })
  }
}