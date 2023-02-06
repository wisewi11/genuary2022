function setup() {
  createCanvas(400, 400);
  stroke('red')
}

function draw() {
  background(203, 195, 227);
  strokeWeight(3)
  
  push()
  strokeWeight(30)
  stroke('hotpink')
  line(50,240,50,height)
  pop()
  
  fill('rebeccapurple')
  circle(50,200,75)
  
  
  

  fill('orange')
  rect(98,244,192,15)

  fill('orange')
 quad(141,268,140,274,248,276,248,270)

  fill('orange')
 quad(127,297,128,298,231,296,230,295)
  
  fill('black')
  triangle(19,11,360,3,189,305)
  
  fill('orange')
  rect(164,339,60,60)
  
  fill('yellow')
  push()
  stroke('blue')
  strokeWeight(1)
  push()
  translate(200,200)
  rotate(PI/3)
  quad(0,0,0,10,180,10,180,0)
  pop()
  quad(220,170,225,175,325,275,320,270)
  pop()
  // fill('orange')
  // strokeWeight(10)
  // line(180,250,220,250)


}