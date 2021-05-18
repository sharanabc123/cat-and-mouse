var cat,catImg;
var mouse,mouseImg;
var garden,gardenImg;
function preload() {
    //load the images here
catImg1=loadAnimation("images/cat1.png");
mouseImg1=loadAnimation("images/mouse1.png");
gardenImg=loadImage("images/garden.png");
catImg2=loadAnimation("images/cat2.png,cat3.png,cat4.png")
mouseImg2=loadAnimation("images/mouse2.png,mouse3.png,mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,700);
cat.addAnimation("cat",catImg1);
cat.scale=0.2
mouse=createSprite(200,650);
mouse.addAnimation("mouse",mouseImg1);
mouse.scale=0.2

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning",catImg2);
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
mouse.addAnimation("mouse",mouseImg2);
mouse.changeAnimation("mouse");
mouse.frameDelay=25;    
}
if(keyDown(RIGHT_ARROW)){
    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse");
    mouse.frameDelay=25;    
    }
}
