"use strict";

let school = [];
let schoolSize = 10;

let state ='simulation';

//counter for eating
let preyCounter = 0;

let user = {
    x: 300,
    y: 300,
    size: 50,
    fill: 255
}

let log = {
  x: 200,
  y: 200,
  size: 50,
  fill: 255,
  vx: 0,
  vy: 0,
  speed: 2
}

let userImage;
let fishImage;
let logImage;

let images = [];
let numImages = 6;
let displayImage;

function preload(){
  userImage = loadImage('assets/images/otter.png');

  fishImage = loadImage('assets/images/fish-1.png');

  logImage = loadImage('assets/images/log.png');
  
  //for(let i = 0; i < numImages; i++) {
   // let loadedImage = loadedImage('assets/images/fish-${i}.png');
  //  images.push(loadedImage);
 // }
}


function setup() {
  createCanvas(600, 600);

  let user = userImage;

  let fish = fishImage;

  
  log.x = random(width);
  log.y = random(height);
  log.vx = log.speed;
  log.vy = random(-log.speed);

  //displayImage = random(images);

  // Create four fish, positioned randomly

  if(state === 'simulation'){
  for(let i = 0; i < schoolSize; i++){
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
  }
}

  
}

//creating fish
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}

//moving + display fish
//player + log details
function draw() {
  background(80, 97, 181);

  for(let i = 0; i < school.length; i++){
    moveFish(school[i]);
    displayFish(school[i]);
  }

  if(state === 'simulation'){
    simulation();
  }
  else if(state === 'goodEnd'){
    goodEnd();
  }
  else if(state === 'badEnd'){
    badEnd();
  }

}

function simulation(){
  player();
  displayLog();
}

//player main funcs
function player(){
    userMov();
    userDisplay();
}

//playing movement w/ keys
function userMov(){
    if (keyIsDown(LEFT_ARROW)) {
        user.x -= 10;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        user.x += 10;
    }
  
    if (keyIsDown(UP_ARROW)) {
        user.y -= 10;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
        user.y += 10;
    }
}

//display otter for user
function userDisplay(){
  imageMode(CENTER);
  image(userImage, user.x, user.y, 100, 100);
  eat();
}

//fish movement
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  //move fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  if(state === 'simulation'){
  imageMode(CENTER);
  image(fishImage, fish.x, fish.y, 70, 70);
  }
}

//display log
function displayLog(){
  imageMode(CENTER);
  image(logImage, log.x, log.y, 70, 70);

  //otter touches log game over
  let logd = dist(user.x, user.y, log.x, log.y);
  if(logd < log.size / 2 + user.size / 2){
    state = 'badEnd';
  }

  //move log
  log.x = log.x + log.vx;
  log.y = log.y + log.vy;

  if(log.x > width || log.x < 0){
    log.vx *= -1;
  }

  if(log.y > height || log.y < 0){
    log.vy*= -1;
  }
}

//allows to create fishes if mouse pressed
function mousePressed(){
    let fish = createFish(mouseX, mouseY);
    school.push(fish);
}

function eat(){
  for(let i = 0; i < school.length; i++){
    let fish = school[i];
    //let d = dist(mouseX, mouseY, fish.x, fish.y);
    let d = dist(user.x, user.y, fish.x, fish.y);
    if(d < fish.size / 2 + user.size / 2){
      preyCounter++;
      //text(preyCounter, width/2, height/2);
      school.splice(i, 1);
      break;
    }
    if(preyCounter == 5){
      state = 'goodEnd';
    }
}

}

//good ending achieved if eaten X amount of fishes
function goodEnd(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('yum :P', width/2, height/2);
    pop();
}

function badEnd(){
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('bonk! ur hurt', width/2, height/2);
  pop();
}
