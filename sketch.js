var car;
var wall;
var speed;
var weight;
var deformation;

function preload() {
}

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(30,150,20,20);
  
  wall = createSprite(1000,150,20,50);
  wall.shapeColor = "black";
  
  speed = random(55,90);
  weight = random(100,400);
}
  
  function draw() {
  background("blue");
  car.shapeColor = "pink";
 car.velocityX = speed;
  car.collide(wall);

  drawSprites();
}