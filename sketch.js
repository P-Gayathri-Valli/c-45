var bg
var wood_h,wood_v
var tom,tom_Image,tom_running
var sofa,sofa2,sofa3
var table
var kitchen
var tv,tabletv
var bookshelf
var jerry1,jerry2,jerry3,jerry4,jerry5
var l1,l2,l3,l4
var c1,c2,c3
var a1,a2,a3,a4
var t1,t2
var c4,c5,c6
var h1,h2
var m1,m2,m3,m4
var e1,e2,e3,e4



function preload(){
  tom_Image=loadImage("tom_s.png")
  tom_running=loadImage("tom.png")
  bg=loadImage("bg.jpg")
  wood_h=loadImage("wood.png")
  wood_v=loadImage("wood2.png")
  sofa=loadImage("sofa.png")
  sofa2=loadImage("sofa2.png")
  sofa3=loadImage("sofa3.png")
  table=loadImage("table.png")
  kitchen=loadImage("kitchen.png")
  tv=loadImage("tv.png")
  tabletv=loadImage("tabletv.png")
  bookshelf=loadImage("bookshelf.jpg")

}

function setup() {
  createCanvas(1366, 620);
 //creating edge sprites
  l1=createSprite(5,312,5,625)
  l2=createSprite(1361,312,5,625)
  l3=createSprite(700,5,1380,5)
  l4=createSprite(680,620,1380,5)
 //giving color to edges
  l1.shapeColor="white"
  l2.shapeColor="white"
  l3.shapeColor="white"
  l4.shapeColor="white"
 //adding images to the edges
  l1.addImage(wood_v)
  l2.addImage(wood_v)
  l3.addImage(wood_h)
  l4.addImage(wood_h)
  


 //creating sprites for forming the letter "C"
  c1=createSprite(250,180,145,20)
  c1.shapeColor="white"
  c1.addImage(sofa2)
  c1.scale=0.5

  c2=createSprite(150,260,20,150)
  c2.shapeColor="white"
  c2.addImage(sofa)

  c3=createSprite(250,345,145,20)
  c3.shapeColor="white"
  c3.addImage(sofa3)
  c3.scale=0.3

 //creating sprites for forming the letter "A"
    
  a3=createSprite(450,250,20,160)
  a3.shapeColor="white"
  a3.addImage(tv)
  a3.scale=0.6

  
 //creating sprites for forming the letter "T"
  t1=createSprite(700,200,170,20)
  t1.shapeColor="white"
  t1.addImage(bookshelf)
  t1.scale=0.3

 
 //creating sprites for forming the letter "C"
 
  c6=createSprite(1000,250,20,150)
  c6.shapeColor="white"
  c6.addImage(kitchen)
  c6.scale=0.7

  

  h4=createSprite(1200,180,70,20)
  h4.shapeColor="white"
  h4.addImage(table)
  h4.scale=0.7


 //creating sprites for forming the letter "M"
  m1=createSprite(500,450,20,120)
  m1.shapeColor="white"

  m2=createSprite(650,450,20,120)
  m2.shapeColor="white"

 //creating sprites for forming the letter "E"
  e1=createSprite(800,450,20,120)
  e1.shapeColor="white"

  e2=createSprite(857,400,90,20)
  e2.shapeColor="white"

  e3=createSprite(847,450,70,20)
  e3.shapeColor="white"

  e4=createSprite(857,500,90,20)
  e4.shapeColor="white"

//creating PC
  tom=createSprite(70,100,50,100)
  tom.addImage(tom_Image)
  tom.scale=0.4
  


  
  
  

}

function draw() {
 background("lightblue")

  if(keyDown(UP_ARROW)){
    tom.velocity.y=-4
  }
  if(keyDown(DOWN_ARROW)){
    tom.velocity.y=4
  }
  if(keyDown(RIGHT_ARROW)){
    tom.velocity.x=4
  }
  if(keyDown(LEFT_ARROW)){
    tom.velocity.x=-4
  }
  tom.bounceOff(l1)
  tom.bounceOff(l2)
  tom.bounceOff(l3)
  tom.bounceOff(l4)

    
  drawSprites();
}

