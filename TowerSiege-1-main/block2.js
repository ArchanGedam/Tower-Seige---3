  
class Block2 {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.Visibility = 255;
  }
  display(){
    if(this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
   fill(255, 144, 85);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
      pop();
    }
  }
  score(){
    if (this.Visiblity<0&&this.Visiblity>-105){
      score++;
    }
  }
}