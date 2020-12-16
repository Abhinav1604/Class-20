var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 40, 90);
movingRect=createSprite(300, 200, 90, 40);
fixedRect.shapeColor="red";
movingRect.shapeColor="white";
fixedRect.debug=true;
movingRect.debug=true;

}

function draw() {

  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    
    fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";
  }else{
    fixedRect.shapeColor="red";
     movingRect.shapeColor="white";
  }

  drawSprites();
}