
class Box {
    constructor(x,y,w,h)
    {
        var options = {
            'restitusion': 0.8,
            'friction':1,
            'density':0.04
        }
     this.body = Bodies.rectangle(x,y,w,h,options)
     this.width = w;
     this.height = h;

     World.add(world,this.body);

    

    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        stroke("green")

        rectMode(CENTER)
        fill(255);
        rect(0,0,this.width,this.height);
        pop();

    }
}