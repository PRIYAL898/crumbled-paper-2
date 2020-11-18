class Ground{
    constructor(x,y){
            var options={
                'isStatic':true,
                'fiction':0.4,
            }

        this.body=Bodies.rectangle(x,y,1000,10,options);

        World.add(world,this.body);
    }
        display(){
            var pos=this.body.position;
            rectMode(CENTRE);
            rectangle(pos.x,pos.y,1000,10);
        }

}