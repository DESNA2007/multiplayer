
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg;
var girl;
var tracker;
var backgroundImg




function preload() {
    backgroundImg = loadImage("unnamed.jpg");
}

function setup(){

    var canvas = createCanvas(1800,900);
    engine = Engine.create();
    world = engine.world;
tracker= createSprite(90,350,50,50)
   girl=new Girl(200,50)

}

function draw(){
    background(backgroundImg);
    tracker.x = mouseX;
    tracker.y = mouseY;
    girl.velocityX=4;
    Engine.update(engine);
  girl.display();
  tracker.display();

}

    function keyPressed() {
        if (keyCode === LEFT_ARROW) {
          Matter.Body.applyForce(girl.body, girl.body.position,{x:-150,y:0});
         }
         if (keyCode === RIGHT_ARROW) {
            Matter.Body.applyForce(girl.body, girl.body.position,{x:100,y:0});
           }
           if (keyCode === UP_ARROW) {
            Matter.Body.applyForce(girl.body, girl.body.position,{x:0,y:-100});
           }
           if (keyCode === LEFT_ARROW) {
            Matter.Body.applyForce(girl.body, girl.body.position,{x:0,y:100});
           }
       }
