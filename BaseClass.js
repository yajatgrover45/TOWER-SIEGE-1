class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
       
      }
      
      display(){
        var pos =this.body.position;
    var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        strokeWeight(4);
        stroke("green");
        rect(0, 0, this.width, this.height);
        pop();
       }
    };
