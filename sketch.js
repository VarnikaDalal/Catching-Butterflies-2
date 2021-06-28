var backImage, girlImg, bflyImg,edges, invground;

function preload(){
  backImage = loadImage("forest.png")
  girlImg=loadImage("girl.png")
  bflyImg=loadImage("bfly.png")
}

function setup() {
  createCanvas(1500,840);
  forest=createSprite(750,350,600,10);
  forest.addImage("forest", backImage);
  girl=createSprite(200,400,10,10);
  girl.addImage("girl", girlImg);
  girl.scale=.1;
  bfly=createSprite(500,300,10,10);
  bfly.addImage("bfly", bflyImg);
  bfly.scale=.1;
  invground = createSprite(width / 2, 550, width, 10);
  invground.visible = false;
}


function draw() {
  background("forest");  

  if(keyDown("space")){
    girl.velocityY = -7;
  }
  
  girl.velocityY = girl.velocityY + 0.5;
  forest.velocityX=-6;
  
  if (forest.x<600){
    forest.x=forest.width/2;
  }
  //stop trex from falling down
  girl.collide(invground)
  drawSprites();
}
