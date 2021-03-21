var setting,settings,test,form ,name,bg,gameState;
var playButton,level_1,music,laundryBag,laundryBagIMG,sweaterIMG,world,engine;
var atachLimit = "Valid";
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload(){
  setting = loadImage("setting1.png");
  bg = loadImage("bg.jpg");
  laundryBagIMG = loadImage("lB.png");
 // sweaterIMG = loadImage("sweater.png");
}
function setup() {
  var canvas = createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  test = new start();
  music ="on";
  gameState = "home";
  settings = createSprite(50,50,20,20);
  settings.addImage(setting);
  settings.scale=0.2;
  sweaterIMG = new sweater(400,400,100,100);
  slingshot = new SlingShot(sweaterIMG.body,{x:200, y:600});

}

function draw() {
  test.display();
  Engine.update(engine);

  background(bg);
  drawSprites();
  if(mousePressedOver(settings)){
    form = new Form();
    form.display();
    gameState = "setting";
  } 
  if(gameState === "setting"){
    test.hide()
  }
  if(mousePressedOver(playButton)){
    level_1 = new Level();
    level_1.display();
    gameState = "playing";
  } 
  if(gameState === "over"){
    text("You Win",500,500);
  }
  if(gameState === "playing"){
    level_1 = new Level();
    level_1.display();
    laundryBag = createSprite(displayWidth-300,500,100,100);
    laundryBag.addImage(laundryBagIMG);
    laundryBag.scale=0.5;
    sweaterIMG.display();
    slingshot.display();
  }
} 
function mouseDragged(){
  if(gameState ==="playing"){
  Matter.Body.setPosition(sweaterIMG.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
  if(gameState === "playing"){
    slingshot.fly();
  }
}

function keyPressed(){
  if(keyCode === 32 && atachLimit === "Valid"){
      slingshot.attach(sweaterIMG.body);
      atachLimit = "Over"; 
      gameOver();
  }
}

function gameOver(){
  //sweaterIMG.hide();
} 