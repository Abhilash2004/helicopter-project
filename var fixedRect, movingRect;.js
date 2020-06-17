var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +0;
}

function draw() {
  background(0,0,0);  

   bounceOff(movingRect,fixedRect)
  drawSprites();
}
function bounceOff (a,b)
{
    if (a.x - b.x < b.width/2 + a.width/2
        && b.x - a.x < b.width/2 + a.width/2) {
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
    }
    if (a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2){
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
    }

}



