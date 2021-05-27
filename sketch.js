var ballXPos = 250;
var ballYPos = 300;

var ballUpDownSpeed = 3;
var ballLeftRightSpeed = 0;

var rectWidth = 100;
var rectThick = 20;

var score = 0;
var plusScore = false;
var hu = 0;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  colorMode(RGB)
  background(230);
  colorMode(HSB)
	moveBall();
  bounce()
//addWind();
  paddle();
 	addScore();
  fill(hu,100,100)
  noStroke();
  ellipse(ballXPos,ballYPos,50);
  
  hu++
  if(hu > 360){
  hu = 0;
  }
  
}

function moveBall(){
  
ballXPos += ballLeftRightSpeed;
ballYPos += ballUpDownSpeed;
  
if(ballYPos > height){
ballXPos = width/2;
ballYPos = -50;
ballUpDownSpeed = 0;
ballLeftRightSpeed = 0;
score = 0;
}
  
else{
ballUpDownSpeed += 0.3 
}
  
if(ballXPos > width || ballXPos < 0){
ballLeftRightSpeed *= -1;  
	}
}

function paddle(){
fill('black')
rect(mouseX - rectWidth/2,mouseY - rectThick/2, rectWidth,rectThick);
  
if(ballXPos > mouseX - rectWidth/2 && ballXPos < mouseX + rectWidth/2
   && ballYPos > mouseY - rectThick/2-15 && ballYPos < mouseY + rectThick/2){
  ballUpDownSpeed *= -1
ballLeftRightSpeed = (ballXPos - mouseX) * 0.4
plusScore = true;  
}
}

function bounce(){
if(ballYPos > height - 5){
ballUpDownSpeed *= -1  
}
}

function addScore(){
textSize(40);
  
text(score, width/2,height/2);
if(plusScore){
score ++
plusScore = false;
}
}

function addWind(){
ballLeftRightSpeed *= 0.98
if(mouseIsPressed){
ballLeftRightSpeed += 0.5  
}
}