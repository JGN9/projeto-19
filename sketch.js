var climber
var ghost
var torre,IMGtorre
var climbers
var modo = "inicio"
var pontos
function preload(){
  IMGtorre=loadImage("tower.png")
  ghostIMG=loadImage ("ghost-jumping.png")
  IMGclimber=loadImage("climber.png")
}

function setup() {
  createCanvas(600, 600);
 torre=createSprite (300,0)
  torre.addImage("torre",IMGtorre)
  ghost=createSprite (300,300)
  ghost.addImage("ghost",ghostIMG)
  ghost.scale= 0.4
  climbers = new Group()
  ghost.debug=false
  ghost.setCollider ("rectangle",-25,20,120,200)
  pontos = 0
}

function draw() {
  background(200);
  drawSprites(); 
  if(modo=="jogar"){
    obstaculos()
    torre.velocityY=5
    pontos=Math.round(frameRate())
    if(torre.y>600){
      torre.y=0
    }
   ghost.x=mouseX
    
    if(climbers.isTouching(ghost)){
     
        modo="fim"
   }
   }
   if (modo=="fim"){
    climbers.setVelocityYEach(0)
    climbers.setLifetimeEach(-1)
    torre.velocityY=0
    fill ("red")
    textSize (50)
    text (pontos,300,300)
    if (mouseDown("leftButton")){
      pontos=0
      modo="jogar"
      climbers.destroyEach()
    }
  }
    
   if (mouseDown("leftButton")){
    if (modo=="inicio"){
      modo="jogar"
    }
   }
}
function obstaculos (){
  if (frameCount%40==0){
    climber=createSprite ()
    climber.x=random (100,500)
    climber.y=0
    climber.addImage("climber",IMGclimber)  
    climber.velocityY=5
    climbers.add(climber)
    climber.lifetime = 200
  }
}

  
