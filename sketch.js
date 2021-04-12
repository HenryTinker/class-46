var cave, caveImage
var platform1, invisGround1, invisGround2, invisGround3
var doors, doorOpen, doorOpen1;
var water, lava, lavaPlat, waterPlat;
var waterGirl, fireBoy
var gameState = 0
var level1,level2;
var dimond
function preload(){
    caveImage = loadImage("grassplains.png")
    platformL = loadImage("longPlat.png")
    doorImage = loadImage("door.png")
    lava = loadImage("redl.webp")
    water = loadImage("waterw.png")
    waterG = loadImage("wg.png")
    fireB = loadImage("fb.png")
    doorO = loadImage("openDoor.png")
    dimondC = loadImage("di.jpg")
}

function setup(){
createCanvas(1400,1000)
   level1 = new Level1() 
   level2 = new Level2()
   
}
function draw(){
    background(0)
   
    if(gameState === 0){
    level1.display()
    }
    

    if(gameState === 1){
        level2.display()
    }
    drawSprites();
}