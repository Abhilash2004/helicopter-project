var helicopter, movingRect,box,heli_animation,ground;

 function preload(){
 heli_animation=loadImage("helicopter.png");
 movingRect=loadImage("package.png");
 }

function setup() {
  createCanvas(1200,800);
 helicopter = createSprite(400, 100, 150, 100);
   helicopter.addImage( heli_animation)
   
  box = createSprite(400, 100,100,80);
    box.addImage(movingRect)
    box.scale=0.5
   ground=createSprite(10,750,12000,10)
  box.velocityY = +5;
  ground.velocityY = 0;
}

function draw() {
  background(0,0,0);  

   bounceOff(box,ground)
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



