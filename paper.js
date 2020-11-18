class Paper{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.5,
         }

         this.body=Bodies.circle(x,y,9,options);
         this.radius=9;

         World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius);
    }
}