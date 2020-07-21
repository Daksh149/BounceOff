var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
 movingRect=createSprite(400,800,80,30);
 movingRect.shapecolor="green";
 movingRect.velocityY=-5;
 fixedRect= createSprite(400,100,50,80); 
 fixedRect.shapecolor="green";
 fixedRect.velocityY=5;
}

function draw() {
  background(0,0,0);
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    ){
      movingRect.velocityX=-(movingRect.velocityX);
      fixedRect.velocityX=-(fixedRect.velocityX);
    }
  if(movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){

      movingRect.velocityY=-(movingRect.velocityY);
      fixedRect.velocityY=-(fixedRect.velocityY);
    }


  drawSprites();
}