function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "pink";
  giraffeRect = createSprite(200, 100, 110, 50);
  giraffeRect.shapeColor = "orange";
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(collide(movingRect, giraffeRect)){
    movingRect.shapeColor = "green";
    giraffeRect.shapeColor = "green";
  }
  else{
    giraffeRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }

  drawSprites();
}

