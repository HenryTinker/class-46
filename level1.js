class Level1{
    constructor(){
   cave = createSprite(500,500,100,50)
   cave.addImage(caveImage);
   cave.scale=3.5

   waterGirl = createSprite(50,850,50,75)
   waterGirl.addImage(waterG)
   waterGirl.scale=0.6

   fireBoy = createSprite(150,850,50,75)
   fireBoy.addImage(fireB)
   fireBoy.scale=0.3

   invisGround1 = createSprite(650,950,2500,15)
   invisGround2 = createSprite(1150,600,300,50)
   invisGround3 = createSprite(450,400,850,15)

   invisGround1.visible = false
   invisGround2.visible = false
   invisGround3.visible = false

   lavaPlat = createSprite(520,900,450,95)
   lavaPlat.debug = true

   waterPlat = createSprite(1150,900,490,95)
   doorOpen = createSprite(100,300,50,200)
   
   doorOpen.visible = false
   doorOpen1 = createSprite(300,300,50,200)

   
}
    
    display(){
        background("black")
    drawSprites();
    image(platformL,0,350,900,150)
    image(platformL,1000,500,300,150)
    if(gameState === 0){
        image(doorImage,50,200,150,200)
        image(doorImage,250,200,150,200)
    }
    image(lava,300,850,450,95)
    image(water,900,800,500,200)

    if(keyDown("right")){
     fireBoy.x += 20
    }
    if(keyDown("left")){
        fireBoy.x -= 20
    }
    if(keyDown("up")){
        fireBoy.velocityY = -5
    }
    if(keyDown("d")){
        waterGirl.x += 20
    }
    if(keyDown("a")){
           waterGirl.x -= 20
    }
    if(keyDown("w")){
        waterGirl.velocityY = -5
    }
    fireBoy.velocityY += 0.2
    fireBoy.collide(invisGround1)
    fireBoy.collide(invisGround2)
    fireBoy.collide(invisGround3)
    waterGirl.velocityY += 0.2
    waterGirl.collide(invisGround1)
    waterGirl.collide(invisGround2)
    waterGirl.collide(invisGround3)

    if(waterGirl.isTouching(lavaPlat)){
     waterGirl.x = 75
    }
    if(fireBoy.isTouching(waterPlat)){
        fireBoy.x = 150
    }
    if(fireBoy.isTouching(doorOpen) && waterGirl.isTouching(doorOpen1)){
    gameState = 1
    image(doorO,20,200,150,200)
    image(doorO,150,200,150,200)
    }
    }

}