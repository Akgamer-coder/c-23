const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var groun1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2= new Box(240,100,50,100);
    groun1= new Ground(200,390,400,20);
}

function draw(){
    background('lightblue');
    Engine.update(engine);
    box1.display();
   box2.display();
   groun1.display();
}