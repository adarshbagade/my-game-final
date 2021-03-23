
 
var player,playeridle;
var bg;
var playerWalk;
var playerAttack;
var playerDeath
var demonWalk,demonAttack,demonDeath,demonIdle;
var dragonAttack,dragonDeath,dragonWalk,dragonIdle,dragonFireAttack;
var jinnAttack,jinnDeath,jinnIdle,jinnMagicAttack,jinnWalk;
var medusaAttack,medusaDeath,medusaIdle,medusaStone,medusaWalk;
var lizardAttack,lizardDeath,lizardIdle,lizardWalk;
var bar1
var bar2
var bar3
var bar4
var bar5
var bar6
var bar7
var gameOver
var youWin

var flag=0
var flag1=0
//var bar

var playerBar,demonBar

var  demonScore= 0, playerScore= 0

var demon,dragon,medusa,jinn,lizard;

var bg2;


function preload(){
playeridle=loadAnimation("idle.png");
playerWalk=loadAnimation("1.png","2.png","3.png","4.png","5.png");
playerAttack= loadAnimation("attack1.png","attack2.png","attack3.png","attack4.png");
playerJump= loadAnimation("jump2.png","jump3.png","jump4.png","jump5.png","jump6.png");
playerDeath= loadAnimation("die.png")

demonWalk= loadAnimation("demonWalk1.png","demonWalk2.png","demonWalk3.png","demonWalk4.png","demonWalk5.png","demonWalk6.png");
demonAttack= loadAnimation("demonAttack1.png","demonAttack2.png","demonAttack3.png","demonAttack4.png")
demonDeath= loadAnimation("Death5.png");
demonIdle=loadAnimation("idle1.png");

bar1=loadAnimation("bar1.png")
bar2=loadAnimation("bar2.png")
bar3=loadAnimation("bar3.png")
bar4=loadAnimation("bar7.png")
bar5=loadAnimation("bar4.png")
bar6=loadAnimation("bar5.png")
bar7=loadAnimation("bar6.png")

bg= loadImage("BG.png");
bg2= loadImage("background.jpg");

gameOver= loadImage("gameOver.png")
youWin= loadImage("youWin.png")



}




function setup() {
  canvas=createCanvas(displayWidth-30,800);
  
gameOver.visible=false
youWin.visible=false


  player = createSprite(100,600);
  player.addAnimation("idle",playeridle);
  player.addAnimation("walk",playerWalk);
  player.addAnimation("attack",playerAttack);
  player.addAnimation("jump",playerJump);
  player.addAnimation("die",playerDeath)
   player.scale=0.35;

   demon = createSprite(displayWidth-200,displayHeight-350);

   demon.addAnimation("idle1",demonIdle);
   demon.addAnimation("walk",demonWalk);
   demon.addAnimation("attack1",demonAttack);
   
   demon.addAnimation("death1",demonDeath);
    demon.scale = 2.8;

    ground= createSprite(displayWidth/2,displayHeight-207,displayWidth,10)
   ground.visible=false;

   
   

   //player.debug=true;
   //demon.debug=true;

   player.setCollider("rectangle",140,-50,700,500)
   demon.setCollider("rectangle",25,15,75,90)
    playerBar=createSprite(150,150)
     playerBar.addAnimation("bar7",bar7)
     playerBar.addAnimation("bar6",bar6)
     playerBar.addAnimation("bar5",bar5)
     playerBar.addAnimation("bar4",bar4)
     playerBar.addAnimation("bar3",bar3)
     playerBar.addAnimation("bar2",bar2)
     playerBar.addAnimation("bar1",bar1)
     playerBar.scale=1.5


     demonBar=createSprite(displayWidth-185,150)
     demonBar.addAnimation("bar7",bar7)
     demonBar.addAnimation("bar6",bar6)
     demonBar.addAnimation("bar5",bar5)
     demonBar.addAnimation("bar4",bar4)
     demonBar.addAnimation("bar3",bar3)
     demonBar.addAnimation("bar2",bar2)
     demonBar.addAnimation("bar1",bar1)
     demonBar.scale=1.5

    background(bg);
}
    

 



function draw() {
  background(bg);

  player.collide(ground)
   demon.collide(ground)

   if (demonScore>=50 && demonScore<=100 ){
     playerBar.changeAnimation("bar6")
   }
   
   else if (demonScore>100 && demonScore<=150 ){
    playerBar.changeAnimation("bar5")
  }
    
  else if (demonScore>150 && demonScore<=200 ){
    playerBar.changeAnimation("bar4")
  }

  else if (demonScore>200 && demonScore<=250 ){
    playerBar.changeAnimation("bar3")
  }

  else if (demonScore>250 && demonScore<=300 ){
    playerBar.changeAnimation("bar2")
  }

  else if (demonScore>300 && demonScore<=350 ){
    playerBar.changeAnimation("bar1")
    player.changeAnimation("die")
    flag1=1
  
  }
  if (flag1===1){
    player.velocityX=0
    player.velocityY=0
    demon.velocityX=0
    demon.velocityY=0
  
    
    textSize(80)
    fill("blue")
    text("Game Over",150,displayHeight/2)
    fill("red")
    text("You Win",1000,450)
    gameOver.visible=true
    youWin.visible=true

    
    //loadImage("gameOver.png",150,displayHeight/2)

    

  }




   if (playerScore>=50 && playerScore<=100 ){
    demonBar.changeAnimation("bar6")
  }

 else if (playerScore>100 && playerScore<=150 ){
    demonBar.changeAnimation("bar5")
  }

 else if (playerScore>150 && playerScore<=200 ){
    demonBar.changeAnimation("bar4")
  }

 else if (playerScore>200 && playerScore<=250 ){
    demonBar.changeAnimation("bar3")
  }

 else if (playerScore>250 && playerScore<=300 ){
    demonBar.changeAnimation("bar2")
  }

 else if (playerScore>300 && flag===0){
    demonBar.changeAnimation("bar1")
    demon.changeAnimation("death1")
   flag=1
  } 

  
   if (flag===1){
    demon.velocityX=0
    demon.velocityY=0
    player.velocityX=0
    player.velocityY=0
    textSize(80)
    fill("red")
    text("Game over",1000,450)
    fill("blue")
    text("You Win",150,displayHeight/2)
   
  }





  if (player.x>displayWidth-30){
    
    bg= loadImage("background.jpg");

    player.x=50;
    player.y=800-50;

    demon.x= 50;
    demon.y=755;

   

    

    

  }




   
   
   if(keyWentDown("s")&& flag1===0){
    
    if (player.isTouching(demon)){
      playerScore= playerScore+5
    }
    player.changeAnimation("attack");
   } 

   if(keyWentUp("s")&& flag1===0){
    
    player.changeAnimation("idle");
   } 
 

   if(keyWentDown("a")&& flag1===0){
    player.velocityX= -5;
    player.changeAnimation("walk");
   } 

   if(keyWentUp("a")&& flag1===0){
    player.velocityX= 0;
    player.changeAnimation("idle");
   } 

   if(keyWentDown("w")&& flag1===0){
    
    player.velocityY= -12;
    player.changeAnimation("jump");
   } 

   player.velocityY=player.velocityY+ 0.5
   

   if(keyWentDown("d")&& flag1===0){
    player.velocityX= 5;
    player.changeAnimation("walk");
   } 

   if(keyWentUp("d")&& flag1===0){
    player.velocityX= 0;
    player.changeAnimation("idle");
   } 

   if(keyWentDown(LEFT_ARROW) && flag===0){
    demon.velocityX= -6;
    demon.changeAnimation("walk");

   } 

   if(keyWentUp(LEFT_ARROW)&& flag===0){
    demon.velocityX= 0;
    demon.changeAnimation("idle1");
   } 

   if(keyWentDown(UP_ARROW)&& flag===0){
   
    demon.velocityY= -10;
    // demon.changeAnimation("jump");
  } 

  demon.velocityY=demon.velocityY+ 0.5

   if(keyWentDown(DOWN_ARROW)&& flag===0){
   
    if (demon.isTouching(player)){
      demonScore= demonScore+5
    }
    demon.changeAnimation("attack1");

    
   } 
   if(keyWentUp(DOWN_ARROW)&& flag===0){
   
    demon.changeAnimation("idle1");

    
   } 
   if(keyWentDown(RIGHT_ARROW)&& flag===0){
   demon.velocityX= 5;
    demon.changeAnimation("walk");

    
   } 
   if(keyWentUp(RIGHT_ARROW)&& flag===0){
   demon.velocityX= 0;
    demon.changeAnimation("idle1");

    
   } 
    
    textSize(80)
    fill("blue")
    
    text(playerScore,100,100)
    fill("red")
    text(demonScore,displayWidth-200,100)
    
   drawSprites();

   

}






/*dragonWalk=loadAnimation("Walk1.png","Walk2.png","Walk3.png","Walk4.png","Walk5.png");
dragonDeath=loadAnimation("Death1 (2).png","Death2 (2).png","Death3 (2).png","Death4 (2).png","Death5 (2).png");
dragonAttack=loadAnimation("dragonAttack1.png","Attack2 (2).png","Attack3 (2).png","Attack4 (2).png");
dragonFireAttack=loadAnimation("Fire_Attack1.png","Fire_Attack2.png","Fire_Attack3.png","Fire_Attack4.png","Fire_Attack5.png");
dragonIdle=loadAnimation("idle2.png");

jinnWalk=loadAnimation("Flight1.png","Flight2.png","Flight3.png","Flight4.png");
jinnAttack=loadAnimation("Attack1 (5).png","Attack2 (5).png","Attack3 (5).png","Attack4 (5).png");
jinnMagicAttack=loadAnimation("Magic_Attack1.png","Magic_Attack2.png","Magic_Attack3.png","Magic_Attack4.png","Magic_Attack5.png","Magic_Attack6.png","Magic_Attack7.png","Magic_Attack8.png","Magic_Attack9.png","Magic_Attack10.png","Magic_Attack11.png","Magic_Attack22.png","Magic_Attack23.png");
jinnDeath=loadAnimation("Death1 (5).png","Death2 (5).png","Death3 (5).png","Death4 (5).png","Death5 (4).png","Death6.png");
jinnIdle=loadAnimation("idle3.png");

lizardWalk=loadAnimation("Walk1 (3).png","Walk2 (3).png","Walk3 (3).png","Walk4 (4).png","Walk5 (2).png","Walk6.png");
lizardAttack=loadAnimation("Attack1 (4).png","Attack2 (4).png","Attack3 (4).png","Attack4 (3).png","Attack5.png");
lizardDeath=loadAnimation("Death1 (4).png","Death2 (4).png","Death3 (4).png","Death4 (3).png","Death5 (3).png");
lizardIdle=loadAnimation("idle1 (3).png");

medusaAttack=loadAnimation("Attack1 (6).png","Attack2 (6).png","Attack3 (6).png","Attack4 (5).png","Attack5 (2).png","Attack6.png");
medusaWalk=loadAnimation("Walk1 (4).png","Walk2 (4).png","Walk3 (4).png","Walk4 (4).png");
medusaDeath=loadAnimation("Death1 (6).png","Death2 (6).png","Death3 (6).png","Death4 (5).png","Death5 (5).png");
medusaStone=loadAnimation("Stone1.png","Stone2.png","Stone3.png","Stone4.png","Stone5.png","Stone6.png","Stone7.png");
medusaIdle=loadAnimation("idle2 (2).png");*/




/*dragon.addAnimation("walk2",dragonWalk);
    dragon.addAnimation("attack2",dragonAttack);
    dragon.addAnimation("fire attack2",dragonFireAttack);
    dragon.addAnimation("death2",dragonDeath);
    dragon.addAnimation("idle2",dragonIdle);
     dragon.scale = 0.8;

     jinn.addAnimation("flight",jinnWalk);
     jinn.addAnimation("attack3",jinnAttack);
     jinn.addAnimation("magic attack",jinnMagicAttack);
     jinn.addAnimation("death3",jinnDeath);
     jinn.addAnimation("idle3",jinnIdle);
      jinn.scale = 0.4;

     medusa.addAnimation("walk4",medusaWalk);
     medusa.addAnimation("attack4",medusaAttack);
     medusa.addAnimation("death4",medusaDeath);
     medusa.addAnimation("stone",medusaStone);
     medusa.addAnimation("idle",medusaIdle);
      medusa.scale = 0.3;

     lizard.addAnimation("walk5",lizardWalk);
     lizard.addAnimation("attack5",lizardAttack);
     lizard.addAnimation("death5",lizardDeath);
     lizard.addAnimation("idle5",lizardIdle);
      lizard.scale= 0.2;
      */