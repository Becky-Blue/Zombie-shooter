var bg,bgImg;
var player, shooterImg, shooter_shooting, zombieImg1, zombieImg2, zombieImg3, zombie;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  zombieImg1 = loadImage("assets/zombie.png")
  zombieImg2 = loadImage("assets/zombie2.png")
  zombieImg3 = loadImage("assets/zombie3.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2,displayHeight/2,20,20)
bg.addImage(bgImg)
bg.scale = 1.5
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-200, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}


function draw() {
  background(0); 


    //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }
  
  spawnZombie();

  drawSprites();

}


function spawnZombie(){

  if(frameCount % 100 === 0){

    zombie = createSprite(displayWidth+400 ,round(random(150,displayHeight-100))  , 30,30)
    zombie.velocityX = -5

    var num = round(random(1,3))

    if (num === 1){
      zombie.addImage(zombieImg1)
      zombie.scale = 0.3
    }

    else if(num === 2){
      zombie.addImage(zombieImg2)
    }
    else{
      zombie.addImage(zombieImg3)
      zombie.scale = 0.5
    }

 
 
 
  }
}