class Slingshot{
    constructor(body1, point1){
        var options = {
            stiffness: 0.05, 
            bodyA:body1,
            pointB:point1, 
            length:100
        };
        this.pointB = point1;
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    detach()
    {
        this.sling.bodyA = null;



    }



    display()
    {
        if(this.sling.bodyA)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

        }


    }

    

}