let sizeD = 5
let spacing = 2


let disizeD = 50;


let sml=15
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  background(96,60,20);
}

function draw() {
  // fill('brown')
  // beginShape()
  // vertex(0,200)
  // vertex(100,0)
  // vertex(300,0)
  // vertex(400,200)
  // vertex(300,400)
  // vertex(100,400)
  // endShape(CLOSE)
  
  for (var x = 0;x<width;x+=sizeD+spacing){
    for(var y = 0;y<height;y+=spacing){
      push()
      fill(random(0,255))
      triangle(x,y,x+spacing,y+spacing,x-spacing,y+spacing)
      pop()
    }
      
  }
  
//   for(var x = 15;x<375;x+=disizeD*2){
//     fill(156,39,6)
//     quad(x,200,
//          x+disizeD/sqrt(2),200+disizeD/sqrt(2),
//          x+disizeD*2/sqrt(2),200,
//         x+disizeD/sqrt(2),200-disizeD/sqrt(2))
//     fill(212,91,18)
//     quad(x+sml,200,
//          x+disizeD/sqrt(2),200+disizeD/sqrt(2)-sml,
//          x+disizeD*2/sqrt(2)-sml,200,
//         x+disizeD/sqrt(2),200-disizeD/sqrt(2)+sml)
//     fill(243,188,46)
//     quad(x+sml*1.5,200,
//          x+disizeD/sqrt(2),200+disizeD/sqrt(2)-sml*1.5,
//          x+disizeD*2/sqrt(2)-sml*1.5,200,
//         x+disizeD/sqrt(2),200-disizeD/sqrt(2)+sml*1.5)
//     fill(95,84,38)
//     quad(x+sml*2,200,
//          x+disizeD/sqrt(2),200+disizeD/sqrt(2)-sml*2,
//          x+disizeD*2/sqrt(2)-sml*2,200,
//         x+disizeD/sqrt(2),200-disizeD/sqrt(2)+sml*2)
    
//   }
  
function mousePressed() {
  // this will download the first 5 seconds of the animation!
  
    saveGif('persianRug', 5);
  
}  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  
}
