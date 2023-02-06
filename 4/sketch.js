let x = 0;
// let f = 0;
let y = 0;
let spacing = 30;
let sUP = 2;
let clutter = 2; //needs to be >0
function setup() {
  createCanvas(800, 800);
  background('white');
}

function draw() {
  
  for(let f = 0;f<2000;f++){
    stroke('black');
    if(random(1)<0.1){
      
      stroke(random()>0.5?'violet':'rebeccapurple')
             
    }
    if (noise(f) < 0.5) {
      strokeWeight(random(0.25,6))
      line(x, y-f/clutter, x + spacing, y + spacing-f/clutter);
    } else {
      strokeWeight(random(0.25,6))
      line(x, y + spacing-f/clutter, x + spacing, y-f/clutter);
      
    }
    x = x + spacing;
    if (x > width) {
      x = 0;
      y = y + spacing;
    }
  
  }
  
    
//       for (var y = 0; y<height;y+=spacing){
//         for (var x = 0; x<width;x+=spacing){
//           if(random(1)<0.5){
//             line(x,y, x+spacing, y+spacing)
          
//           }
//           else{
//             line(x, y +spacing, x+spacing, y)
//           }
          
//         }
        
//       }
    
  
}
