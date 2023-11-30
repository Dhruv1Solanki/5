var naruto, narutoImg, narutoRunningImg;
var shuriken, shurikenImg;
var log, logImg;
var konohaImg;



function preload(){

  narutoImg= loadImage("assets/Naruto Idle.png")
  narutoRImg= loadImage("assets/Naruto Idle.png")
  narutoImg= loadImage("assets/Naruto Idle.png")
  narutoImg= loadImage("assets/Naruto Idle.png")
  narutoImg= loadImage("assets/Naruto Idle.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}