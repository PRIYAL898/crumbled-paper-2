
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,world,body,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(400,200,4);
	
	ground=new Ground(700,23,1000,10);
	
	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  
  Engine.update(engine);

  paper.display();

  ground.display();
}



