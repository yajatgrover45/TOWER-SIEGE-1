
const Bodies=Matter.Bodies;
const Constraint  = Matter.Constraint;
const World = Matter.World;
var ball1,ball2,ball3,ball4,ball5,ball6;  
var ball7,ball8,ball9;    
var log;                        
var bird;  
var chain;
function setup() {
  createCanvas(1200,400);
  ball1 = new Ball(700,320,70,70);
  ball2 = new Ball(920,320,70,70);
  ball3 = new Ball(810,320,70,70);
  ball4 = new Ball(700,240,70,70);
  ball5 = new Ball(920,240,70,70);
  ball6 = new Ball(810,240,70,70);
  ball7 = new Ball(700,150,70,70);
  ball8 = new Ball(920,150,70,70);
  ball9 = new Ball(810,150,70,70);
  log = new Log(300,320,20,130);
  bird = new Bird(350,320,30,30);
  chain = new Chain(bird.body,log.body);
  }

function draw() {
  background("red");  
  drawSprites();
 
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 ball6.display();
 ball7.display();
 ball8.display();
 ball9.display();
 log.display();
 bird.display();
 chain.display();

}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  log.fly();
}