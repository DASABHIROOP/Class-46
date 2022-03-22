var rocket,rocketImg;
var bullet,bulletImg;
var bg,bgImg;
var alienImg;
var aliensGroup;

function preload(){
alienImg= loadImage("assets/alienUFO.png");
rocketImg = loadImage("assets/rocket.png");
bulletImg = loadImage("assets/bullet.png");
bgImg = loadImage("assets/background.png");
}

function setup() {
  createCanvas(600,570);

  bg = createSprite(300,285);
  bg.addImage("backgroundImage",bgImg);

  rocket = createSprite(300,500);
  rocket.addImage("rocketImage",rocketImg);
  rocket.scale = 0.25;

  aliensGroup = new Group();
 
}

function draw() {
  
  background(180);

  if(keyDown("RIGHT_ARROW") && rocket.x < 570){
    rocket.x = rocket.x+3;
  }

  if(keyDown("LEFT_ARROW") &&  rocket.x > 30){
    rocket.x = rocket.x-3;
  }

  if(keyDown("space")){
    bullet = createSprite(300,430);
    bullet.addImage("bulletImage",bulletImg);
    bullet.scale = 0.1;
    bullet.velocityY = -1;
    bullet.x = rocket.x;
  }

  spawnAliens();
   
 drawSprites();
}

function spawnAliens() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var alien = createSprite(600,120,40,10);
    alien.x = Math.round(random(40,560));
    alien.addImage(alienImg);
    alien.scale = 0.05
    alien.velocityY = 2;
    aliensGroup.add(alien);
  }
}

