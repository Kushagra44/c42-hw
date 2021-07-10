var hasdocked=false
function preload(){
  bg=loadImage("spacebg.jpg")
  issimg=loadImage("iss.png")
  sc1img=loadImage("spacecraft1.png")
  sc2img=loadImage("spacecraft2.png")
  sc3img=loadImage("spacecraft3.png")
  sc4img=loadImage("spacecraft4.png")

}
function setup() {
  createCanvas(1000,600);
  spaceCraft=createSprite(300, 500);
  spaceCraft.addImage(sc1img)
  spaceCraft.scale=0.2
  iss=createSprite(300,400)
  iss.addImage(issimg)

  
}

function draw() {
  background(bg);  
  spaceCraft.addImage(sc1img)
  if(!hasdocked){
    spaceCraft.x=spaceCraft.x+random (-1,1)
    if(keyDown("UP_ARROW")){
      spaceCraft.y-=2
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(sc3img)
      spaceCraft.x-=1
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(sc4img)
      spaceCraft.x+=1
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(sc1img)
      spaceCraft.y+=2
    }
  }
  if(spaceCraft.y===494&&spaceCraft.x===234){
    hasdocked=true
    textSize(25)
    fill(255)
    text("DOCKING SUCCESSFUL",500,300)
  }
  drawSprites();
}