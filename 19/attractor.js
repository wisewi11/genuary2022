class Attractor{
    constructor(x,y,m){
      this.pos = createVector(x,y)
      this.mass = m
      this.r = sqrt(this.mass)*2
    }
    
    
    show(){
      noStroke()
      fill(255,0,100)
      ellipse(this.pos.x,this.pos.y,this.r*2)
    }
  }