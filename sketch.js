var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 0, 50, 50);
  fixedRect =  createSprite(200, 400, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "green";

 movingRect.velocityY = 3;
fixedRect.velocityY = -3;
}

function draw() {
  background(0);  

  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;


//if(isTouching(movingRect,fixedRect)){
  //movingRect.shapeColor="red";
  //fixedRect.shapeColor="red"
//}
//else{
  //movingRect.shapeColor="green";
  //fixedRect.shapeColor="green";
//}

bounceOff(fixedRect,movingRect)
  drawSprites();
}




