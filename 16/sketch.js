let img;

function preload() {
  img = loadImage('joebob.jpg.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
}

function draw() {
  background(220);
  noStroke();

  push()
  rotateZ(QUARTER_PI * 8)
  texture(img)
  plane(400, 400)
  pop()

  push()
  rotateZ(QUARTER_PI * 7.5)
  texture(img)
  plane(350, 350)
  pop()

  push()
  rotateZ(QUARTER_PI * 7)
  texture(img)
  plane(300, 300)
  pop()

  push()
  rotateZ(QUARTER_PI * 6.5)
  texture(img)
  plane(250, 250)
  pop()

  push()
  rotateZ(QUARTER_PI * 6)
  texture(img)
  plane(200, 200)
  pop()

  push()
  rotateZ(QUARTER_PI * 5.5)
  texture(img)
  plane(150, 150)
  pop()

  push()
  rotateZ(QUARTER_PI * 5)
  texture(img)
  plane(100, 100)
  pop()


  push()
  rotateZ(QUARTER_PI * 4)
  texture(img)
  plane(30, 30)
  pop()
}