const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var fondoImg,fondo 
var player1,player1Img
var player2,player2Img
var gameState="play"
var edges

function preload(){
  fondoImg=loadImage("autopista.jpg")
  player1Img=loadImage("ferr.png")
  player2Img=loadImage("ferr2.png")
}

function setup() {

background("black")
edges=createEdgeSprites();
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
fondo= createSprite(330,200)
fondo.addImage("calle",fondoImg)
fondo.scale=1.2
fondo.visible=false
player1=new Carro(240,300,80,80)


player2=new Carros(400,300,90,90)

//player1=createSprite(250,300)

/*player1.addImage("jugador1",player1Img)
player1.scale=0.18
player2=createSprite(420,300)
player2.addImage("jugador2",player2Img)
player2.scale=0.23*/
 
}

function draw() {
 
 // if(gameState==="intro"){
  //background("black");
  //fill("white")
  //textSize(25)
  //text("Presiona espacio para empezar",200,200);
  //if(keyCode===32){
    //gameState="prestart"
  //}
  /*if(gameState==="prestart"){
    background("black")
    text("Selecciona tu modalidad multijugador/solo",150,50)
    text("Presiona tecla espaciadora para seleccionar multijugador",150,100)
    text("Presiona s para jugar en modo solo ",150,150)
    text("En modo solo te moverás con flecha izquierda y derecha",150,200)
    text("En modo multijugador con S y D y flecha izq. y der.",150,250)
    if(keyDown("space")){
      gameState==="plays"
    }
    if(keyDown("s")){
    gameState="play"}
  }*/
  
  if(gameState==="play"){
    background("white")
 
    fondo.visible=true
    fondo.velocityY=2
    if(fondo.y>250){
     fondo.y=fondo.height/2
    }
   
    if(keyCode===LEFT_ARROW){
      player2.body.position.x=player2.body.position.x-5
    }
    if(keyCode===RIGHT_ARROW){
      player2.body.position.x=player2.body.position.x+5

    }
    if(keyCode===97){
      player1.body.position.x=player1.body.position.x-5
    }
    if(keyCode===100){
      player1.body.position.x=player1.body.position.x+5
    }
  }

//} 

  



 
  drawSprites();
  player1.display();
  player2.display();
  player1.body.depth=player2.body.depth



  
}
