const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var side2;
//var paperImg,DustbinImg;

/*function preload(){

}*/

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(40,595,70,70);

  ground = new Ground(500,600,4000,20);
  side2 = new Side(695,450,100,150);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);

  background(50);
  
  //keyPressed();

  paper.display();
  ground.display();
  side2.display();

  Engine.update(engine);
  
  drawSprites(); 
}

function keyPressed(){
  //if(keyCode ===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-900});
 // }
}



