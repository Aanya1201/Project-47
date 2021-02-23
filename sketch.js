var fruits,chips,chocolates;
var player;
var nutella,chocolate, bluechips, yellowchips;
var strawberry, mango, guava, watermelon;
var hand;
var fruitsgroup,chipsgroup,chocolatesgroup;
var score =0;
var gameState= "Play";

function preload(){
nutella= loadImage("nutella.png");
chocolate= loadImage("choco.png");
bluechips= loadImage("blue.png");
yellowchips= loadImage("yellow.png");
strawberry= loadImage("strawberry.png");
mango= loadImage("mango.png");
guava= loadImage("guava.png");
watermelon= loadImage("wm.png");
background1= loadImage ("bg.jpg");
grabbinghand= loadImage ("grabbing hand.png");
handimg= loadImage ("hand.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  hand = createSprite(width/2,height/2,50,50);
  hand.addImage("hand",handimg);
  scale.hand = 0.5;
  
  fruitsgroup = new Group ();
  chipsgroup = new Group ();
  chocolatesgroup = new Group ();
}


function draw() {
  background(background1);  

if (gameState === "Play"){


  hand.x=mouseX;
  hand.y=mouseY;

  if (mousePressedOver(fruits)){
    hand.addImage("hand",grabbinghand )
    fruits.destroy();
    score = score + 10;
  }
  else if (mousePressedOver(chocolates)){
    hand.addImage("hand",grabbinghand )
    chocolates.destroy();
    gameState = "end";
  }
  else if (mousePressedOver(chips)){
    hand.addImage("hand",grabbinghand )
    chips.destroy();
    score = score-10;
  }
  else{
    hand.addImage("hand",handimg); 
  }
  createchips();
  createchocolates();
  createfruits();
}
if (gameState === "end"){
  background(0);
}
  drawSprites();

}

function createfruits(){
if (frameCount % 71===0){
fruits = createSprite((random(20,width-50)),0,50,50)
fruits.velocityY = 15;
var rand = Math.round(random(1,4));
switch(rand){
  case 1:fruits.addImage("strawberry",strawberry);
  break;
  case 2:fruits.addImage("guava",guava);
  break;
  case 3:fruits.addImage("mango",mango);
  break;
  case 4:fruits.addImage("watermelon",watermelon);
  break;
  
}
fruits.scale=0.5;
fruits.lifetime = 100;
fruits.depth=hand.depth;
hand.depth=hand.depth+1;
fruitsgroup.add(fruits);

}
}

function createchips(){
  if (frameCount % 111===0){
  chips = createSprite((random(20,width-50)),0,40,80)
  chips.velocityY = 15;
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1:chips.addImage("yellow",yellowchips);
    break;
    case 2:chips.addImage("blue",bluechips);
    break;
    
    
  }
  chips.scale=0.3;
  chips.lifetime = 100;
  chips.depth=hand.depth;
  hand.depth=hand.depth+1;
  chipsgroup.add(chips);
  
  
  }
  }

  function createchocolates(){
    if (frameCount % 171===0){
    chocolates = createSprite((random(20,width-50)),0,20,20)
    chocolates.velocityY = 15;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1:chocolates.addImage("nutella",nutella);
      break;
      case 2:chocolates.addImage("choco",chocolate);
      break;
     
      
    }
    chocolates.scale=0.2;
    chocolates.lifetime = 100;
    chocolates.depth=hand.depth;
    hand.depth=hand.depth+1; 
    chocolatesgroup.add(chocolates);
    }
    
    }