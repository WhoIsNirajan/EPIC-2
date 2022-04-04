const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var push
var up
var right
var btn1,btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
btn1 = createImg('right.png')

btn1.position(220,30)
btn1.size(50,50)

btn1.mouseClicked(hforce)

btn2 = createImg("up.png")

btn2.position(30, 130)
btn2.size(50,50)

btn2.mouseClicked(vforce)
  ground= new Ground(200,390,400,20) 

  top_wall = new Ground(200, 10, 400, 20)

  right = new Ground(10, 200, 20, 400)

  left = new Ground(390,200, 20, 400)

  ball_options={
    restitution:0.5,
    friction:0.15, 
  }

  ball = Bodies.circle(200, 200, 25, ball_options )  
  
  World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
 
  ground.show()
  top_wall.show()
  
  right.show()
  left.show()

  ellipse(ball.position.x, ball.position.y, 20)

  Engine.update(engine);

}
function hforce(){
  Matter .Body.applyForce(ball,{x:0 ,y:0},{x:0.15,y:0})
}
function vforce(){
  Matter .Body.applyForce(ball,{x:0 ,y:0},{x:0,y:0.15})
}