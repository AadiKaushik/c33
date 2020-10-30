class rope {
    constructor(bodyA,pointB)
    {
        var options = 
        {  
         bodyA:bodyA,
         pointB:pointB,
         'stiffness':1.2,
         'length':150,
        }
     this.body = Matter.Constraint.create (options)
     this.pointB = pointB;

     World.add(world,this.body);

    

    }

    display()
    {
        if(this.body.bodyA){
            push();
var pointA = this.body.bodyA.position;
var pointB = this.pointB;
strokeWeight(7);
stroke("yellow")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop();
        }

    }
}