const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop, man

function preload(){
    
}

function setup(){
   createCanvas(1000, 1000);
   engine = Engine.create();
   world = engine.world;
    man = new Man(500, 750, 10, 10);
    //drop = new Drop(500, 300, 10, 10);
}

function draw(){
    man.display();
    drop.display();
}   

