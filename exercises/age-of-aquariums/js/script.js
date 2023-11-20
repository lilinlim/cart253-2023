"use strict";

let school = [];
let schoolSize = 10;

let preyCounter = 0;

let user = {
    x: 300,
    y: 300,
    size: 70,
    fill: 255
}

let images = [];
let numImages = 6;
let displayImage;

function preload(){
  for(let i = 0; i < numImages; i++) {
    let loadedImage = loadedImage('assets/images/fish-${i}.png');
    images.push(loadedImage);
  }
}
function setup() {
  createCanvas(600, 600);

  displayImage = random(images);

  // Create four fish, positioned randomly

  for(let i = 0; i < schoolSize; i++){
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
  }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
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

// draw()
// Moves and displays our fish
function draw() {
  background(0);

  for(let i = 0; i < school.length; i++){
    moveFish(school[i]);
    displayFish(school[i]);
  }

  player();

  imageMode(CENTER);
  image(displayImage, width / 2, height / 2);

}

function player(){
    userMov();
    userDisplay();
}

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

function userDisplay(){
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    eat();
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function mousePressed(){
    //let fish = createFish(mouseX, mouseY);
    //school.push(fish);
}

function eat(){
  for(let i = 0; i < school.length; i++){
    let fish = school[i];
    //let d = dist(mouseX, mouseY, fish.x, fish.y);
    let d = dist(user.x, user.y, fish.x, fish.y);
    if(d < fish.size / 2 + user.size / 2){
      preyCounter++;
      text(preyCounter, width/2, height/2);
      school.splice(i, 1);
      break;
    }
    if(preyCounter == 2){
      end1();
    }
}

}



function end1(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('end', width/2, height/2);
    pop();
}

//1- predator fish user DONE
//2- other fish eliminates when touched DONE
//3- random clr fish
//4- eat all fish end1; timer run out end2