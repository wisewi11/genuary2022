function setup() {
    createCanvas(400, 400);
    noStroke()
  }
  
  function draw() {
    background('beige');
  
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
    // fill('orange')
    // strokeWeight(10)
    // line(180,250,220,250)
  
  
  }
  function keyPressed() {

    // If you hit the s key, save an image
    if (key == 's') {
      save("mySketch.png");
    }
  }