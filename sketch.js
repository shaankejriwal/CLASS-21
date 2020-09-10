var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1600,800);
  movingRect = createSprite(400, 200, 30, 80);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(800,200,80,30);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(1000,200,30,30);
  gameObject1.shapeColor = "orange";
  gameObject2 = createSprite(1100,200,30,30);
  gameObject2.shapeColor = "orange";
  gameObject3 = createSprite(1200,200,30,30);
  gameObject3.shapeColor = "orange";
  gameObject4 = createSprite(1300,200,30,30);
  gameObject4.shapeColor = "orange";

  movingRect.velocityX = 4;

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0); 
  
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }

  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  bounceOff(movingRect,gameObject1);
  
  drawSprites();
}

