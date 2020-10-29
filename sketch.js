
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	  img=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(350,580,900,20)
	tree=new Tree(600,320,0.0000001,0.000001)
	stone= new Stone(155,440,60,40)
	m1=new Mango(570,200)
	m2=new Mango(520,250)
	m3=new Mango(620,150)
	m4=new Mango(650,230)
	m5=new Mango(700,250)
    chain=new Chain(stone,{x:155,y:440})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  ground.display();
  tree.display();
  imageMode(CENTER)
  image(img,200,500,130,270)
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  drawSprites();
 
}



