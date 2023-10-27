let rice = {
  x: 200,
  y: 300,
  size: 300,
  fill: {
    r: 255,
    g: 223,
    b: 216
}
}

let bowl;
  
let state = 'title';

var clicks = 0;

let timer = 3;

//images
let titleScreen;
let gameOver;
let winScreen;
let hungry;
let menu;
let huge;

let riceFull;
let riceMid;
let riceSmall;
let riceEmpty;

function preload(){ 
  fontRegular = loadFont('assets/fonts/regular.ttf');

  //images
  titleScreen = loadImage('assets/images/titleScreen.jpg');
  gameOver = loadImage('assets/images/gameOver.jpg');
  winScreen = loadImage('assets/images/winScreen.jpg');
  hungry = loadImage('assets/images/hungry.jpg');
  menu = loadImage('assets/images/menu.jpg');
  huge = loadImage('assets/images/huge.jpg');

  riceFull = loadImage('assets/images/riceFull.png');
  riceMid = loadImage('assets/images/riceMid.png');
  riceSmall = loadImage('assets/images/riceSmall.png');
  riceEmpty = loadImage('assets/images/riceEmpty.png');

  eatOpen = loadImage('assets/images/eatOpen.png');
  eatClosed = loadImage('assets/images/eatClosed.png');

  //= loadImage('assets/images/.jpg');
}

function setup() {
  createCanvas(800, 600);

  textFont(fontRegular);
  fill(0);
  stroke(255);
  strokeWeight(3);

  //rice = riceFull;

  //noCursor(); //custom cursor?
}

function draw() {
  background(255, 212, 212);
  
  //state machine
  if(state === 'title'){
    title()
  }
  else if(state === 'hunger'){
    hunger();
  }
  else if(state === 'ordering'){
    ordering();
  }
  else if(state === 'food'){
    food();
  }
  else if(state === 'food2'){
    food2();
  }
  else if(state === 'simulation'){
    simulation();
    //timerShow();
  }
  else if(state === 'end'){
    end();
  }
  else if(state === 'timeDone'){
    timeDone();
  }
}
    
//title screen
function title(){
  
  imageMode(CENTER);
  image(titleScreen, 400, 300);

  push();
  textSize(60);
  fill(0);
  textAlign(CENTER, CENTER);
  text('click to start', width/2, height/1.25);
  pop();

}
    
function hunger(){
  imageMode(CENTER);
  image(hungry, 400, 300);

  push();
  rectMode(CENTER);
  fill(255);
  rect(400, 500, 500, 150);

  textSize(64);
  fill(0);
  textAlign(CENTER, CENTER);
  text("i'm hungry...", width/2, height/1.25);
  pop();
}

function ordering(){
  imageMode(CENTER);
  image(menu, 400, 300);

  push();
  textSize(64);
  textAlign(CENTER, CENTER);
  text('hmm.. what shall i order..', width/2, height/1.25);
  pop();
}

function food(){
  imageMode(CENTER);
  image(huge, 400, 300);

  push();
  textSize(64);
  textAlign(CENTER, CENTER);
  text("wow! so big!", width/2, height/4);
  pop();
}

function food2(){
  imageMode(CENTER);
  image(huge, 400, 300);

  push();
  textSize(50);
  textAlign(CENTER, CENTER);
  text("i need to finish this quickly", width/2, height/4);
  pop();
}
    
function simulation(){

  noStroke();
  ellipse(rice.x, rice.y, rice.size);
  
  if(clicks<5){
    fill(rice.fill.r, rice.fill.g, rice.fill.b);
  }
  else if (clicks>5 && clicks<8){
    rice.fill.r = 0;
    rice.fill.g =0;
    rice.fill.b = 0;
    fill(rice.fill.r, rice.fill.g, rice.fill.b);
  }
  else if (clicks>8 && clicks<11){
    rice.fill.r = 255;
    rice.fill.g =255;
    rice.fill.b = 255;
    fill(rice.fill.r, rice.fill.g, rice.fill.b);
  }
  else if (clicks > 11){
    rice.fill.r = 255;
    rice.fill.g =25;
    rice.fill.b = 25;
    fill(rice.fill.r, rice.fill.g, rice.fill.b);
  }
      
}

function mouseLoc(){
  if(state === 'simulation'){
    let d = dist(mouseX, mouseY, rice.x, rice.y);
    if (d < rice.size / 2){
      return true;
    } else {
      return false;
    }
  }
}
    
function mousePressed(){
      
  if(state === 'title'){
    state = 'hunger';
  }
  else if(state === 'hunger'){
    state = 'ordering'
  }
  else if(state === 'ordering'){
    state = 'food';
  }
  else if(state === 'food'){
    state = 'food2';
  }
  else if(state === 'food2'){
    state = 'simulation'
  }
  else if(state === 'simulation' && mouseLoc()){
    clicks ++;
    rice.size = rice.size - 10;
      if(clicks == 12){
        state = 'end';
      }
    }
      
}
    
function end(){
  imageMode(CENTER);
  image(winScreen, 400, 300);

  push();
  textSize(64);
  textAlign(CENTER, CENTER);
  text('yay i did it on time!', width/2, 550);
  pop();
}

function timerShow(){
  push();
  textSize(50);
  textAlign(CENTER, CENTER);
  text(timer, width/2, height/4);
  pop();

  if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
  }

  if (timer == 0) {
      state = 'timeDone';
  }
}

//game over
function timeDone(){
  imageMode(CENTER);
  image(gameOver, 400, 300);

  push();
  textSize(64);
  textAlign(CENTER, CENTER);
  text('game over..', width/2, height/4);
  pop();
}