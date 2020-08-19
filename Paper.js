class Paper {
    constructor(x,y,diameter) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,diameter,options);
      this.diameter = diameter;
      this.image = loadImage("images/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("purple");
      image(this.image, 0,0,this.diameter/2,this.diameter/2);
      pop();
    }
  }