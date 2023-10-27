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
  
//starting state
let state = 'title';

//click counter starts at 0
var clicks = 0;

//timer
let timer = 15;

//for cat eating sprites
let catto, eatOpen, eatClosed;

//dialogue backgrounds
let titleScreen;
let gameOver;
let winScreen;
let hungry;
let menu;
let huge;

//rice images
let bowl;
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

  //font
  textFont(fontRegular);
  fill(0);
  stroke(255);
  strokeWeight(3);

  //starting images for cat&rice
  catto = eatOpen;
  bowl = riceFull;
}

function draw() {
  background(255, 212, 212);

  //making sure the images will show
  imageMode(CENTER);
  image(catto, 400, 300);
  image(bowl, 300, 300);

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
    timerShow();
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
    
//dialogue 1
function hunger(){
  imageMode(CENTER);
  image(hungry, 400, 300);

  push();
  textSize(64);
  fill(0);
  textAlign(CENTER, CENTER);
  text("i'm hungry...", width/2, height/1.25);
  pop();
}

//dialogue 2
function ordering(){
  imageMode(CENTER);
  image(menu, 400, 300);

  push();
  textSize(64);
  textAlign(CENTER, CENTER);
  text('hmm.. what shall i order..', width/2, height/1.25);
  pop();
}

//dialogue 3
function food(){
  imageMode(CENTER);
  image(huge, 400, 300);

  push();
  textSize(64);
  textAlign(CENTER, CENTER);
  text("wow! so big!", width/2, height/4);
  pop();
}

//dialogue 4
function food2(){
  imageMode(CENTER);
  image(huge, 400, 300);

  push();
  textSize(50);
  textAlign(CENTER, CENTER);
  text("i need to finish this quickly", width/2, height/4);
  pop();
}
    
//game part
function simulation(){
  imageMode(CENTER);
  
  //rice image depending on number of clicks
  if(clicks<5){
    bowl = riceFull;

    instructions();
  }
  else if (clicks>5 && clicks<8){
    bowl = riceMid;
  }
  else if (clicks>8 && clicks<11){
    bowl = riceSmall;
  }
  else if (clicks > 11){
    bowl = riceEmpty;
  }
      
}

//instructions
function instructions(){
  push();
    textSize(50);
    textAlign(CENTER, CENTER);
    text("click on the rice to eat", width/2, height/1.25);
    pop();
}

//from pippin's drag, drop delete code
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
      
  //states
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
    clicking();
  }

  //cat sprite
  catto = eatClosed;
  
}

//click counter
function clicking(){
  //+1 click when rice is clicked
  clicks ++;
  //end condition
    if(clicks == 12){
      state = 'end';
    }
}

function mouseReleased(){
  //cat sprite
  catto = eatOpen;
}
    
//ending
function end(){
  imageMode(CENTER);
  image(winScreen, 400, 300);

  push();
  textSize(64);
  fill(0)
  textAlign(CENTER, CENTER);
  text('yay i did it on time!', width/2, 550);
  pop();
}

//timer
function timerShow(){
  push();
  textSize(50);
  textAlign(CENTER, CENTER);
  text(timer, width/2, height/8);
  pop();

  //reducing timer
  if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
  }

  //timer finish --> game over
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