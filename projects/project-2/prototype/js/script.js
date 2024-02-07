/*****************
  project 1
  elle lilin lim

  you're a cat and must eat your rice lunch before time runs out!
  make sure to click on the rice to consumme your delicious meal.
*****************/

"use strict";

//images
let tray;
let utensils;
let kimchi;
let gogi;
let bap;
let mandu;
let namul;
let gyeran;
let guk;
let radish;


let shape1;
let shape2;

let button = {
  x: 600,
  y: 150,
  size: 100,
  fill: {
    r: 255,
    g: 255,
    b: 217
}
}

//setting up starting state
let state = 'title';

let dialogue = [
    'r arrow to continue',
    'l arrow key to go back',
    'test',
];

let dialogueAgain = [
    'test',
    'to see if 2 array',
    'works',
    'click circle to change clr',
]

let currentIndex = 0;

let secondIndex = 0;

function preload(){
  //images
  tray = loadImage('assets/images/tray.png');
  utensils = loadImage('assets/images/utensils.png');
  kimchi = loadImage('assets/images/kimchi.png');
  gogi = loadImage('assets/images/gogi.png');
  bap = loadImage('assets/images/bap.png');
  mandu = loadImage('assets/images/mandu.png');
  namul = loadImage('assets/images/namul.png');
  gyeran = loadImage('assets/images/gyeran.png');
  guk = loadImage('assets/images/guk.png');
  radish = loadImage('assets/images/radish.png');
}

function setup() {
    createCanvas(800, 600);

    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
  
    makeShapesSim();
}


function draw() {
    background(255, 192, 203);
    
    //text(dialogue[currentIndex], width/2, height/2);

    if(state === 'title'){
        title();
    }
    else if(state === 'talking'){
        talking();
    }
    else if(state === 'stateTest'){
        stateTest();
    }
    else if(state === 'talkingAgain'){
        talkingAgain();
    }
    else if(state === 'simulation'){
        simulation();
    }
    else if(state === 'end'){
        end();
    }
}

function mousePressed() {

    if(state === 'title'){
        state = 'talking';
    }
    else if(state === 'stateTest'){
        state = 'talkingAgain';
    }
    if(state === 'simulation' && mouseLoc()){
    state = 'end';
  }
  
  handleMousePressed(shape1);
  handleMousePressed(shape2);

    
}

function keyPressed() {
    if(keyCode === LEFT_ARROW && state === 'talking'){
        currentIndex = currentIndex - 1;

        if(currentIndex === -1){
            currentIndex = 0;
        }

    } else if (keyCode === RIGHT_ARROW && state === 'talking'){
        currentIndex = currentIndex + 1;

        if(currentIndex === dialogue.length){
            currentIndex = dialogue.length - 1;
            state = 'stateTest';
        }
    }

    if(keyCode === LEFT_ARROW && state === 'talkingAgain'){
        secondIndex = secondIndex - 1;

        if(secondIndex === -1){
            secondIndex = 0;
        }

    } else if (keyCode === RIGHT_ARROW && state === 'talkingAgain'){
        secondIndex = secondIndex + 1;

        if(secondIndex === dialogueAgain.length){
            secondIndex = dialogueAgain.length - 1;
            state = 'simulation';
        }
    }
}

function title(){
    text('click to start', width/2, height/2);
}

function talking(){
    text(dialogue[currentIndex], width/2, height/2);
}

function stateTest(){
    text('this is a click', width/2, height/2);
}

function talkingAgain(){
    text(dialogueAgain[secondIndex], width/2, height/2);
}

function simulation(){
  handleDragging(shape1);
  handleDragging(shape2);

  drawShape(shape1);
  drawShape(shape2);
  
  makeButton();

  imageMode(CENTER);
  image(tray, 400, 300);
  image(kimchi, 400, 300);
}

function makeShapesSim(){
  shape1 = createDraggableShape(width/4, height/4, `#CBC3E3`);
  shape2 = createDraggableShape(width/6, 3 * height/4, `#ADD8E6`);
}

function createDraggableShape(x, y, color) {
  let shape = {
    x: x,
    y: y,
    size: 100,
    isBeingDragged: false,
    offsetX: 0,
    offsetY: 0,
    fill: color,
  };
  return shape;
}


function makeButton(){
  noStroke();
  fill(button.fill.r, button.fill.g, button.fill.b);
  ellipse(button.x, button.y, button.size);
}

function mouseLoc(){
  if(state === 'simulation'){
    let d = dist(mouseX, mouseY, button.x, button.y);
    if (d < button.size / 2){
      return true;
    } else {
      return false;
    }
  }
}


function handleDragging(shape) {

  if (shape.isBeingDragged) {
    shape.x = mouseX + shape.offsetX;
    shape.y = mouseY + shape.offsetY;

    shape.x = constrain(shape.x, 0, width);
    shape.y = constrain(shape.y, 0, height);
  }
}

function drawShape(shape) {  
  push();
  fill(shape.fill);
  noStroke();
  // Draw that shape!
  ellipse(shape.x, shape.y, shape.size);
  pop();
}

function mouseIsInsideShape(shape) {
  let d = dist(mouseX, mouseY, shape.x, shape.y);
  if (d < shape.size / 2) {
    return true;
  } else {
    return false;
  }
}

function handleMousePressed(shape) {
  if (mouseIsInsideShape(shape)) {
    shape.isBeingDragged = true;
    shape.offsetX = shape.x - mouseX;
    shape.offsetY = shape.y - mouseY;
  }
}

function mouseReleased() {
  handleMouseReleased(shape1);
  handleMouseReleased(shape2);
}

function handleMouseReleased(shape) {
  if (!shape.isBeingDragged) {
    return;
  }
  
  {
    // Reset dragging
    shape.isBeingDragged = false;
    // Reset the offset
    shape.offsetX = 0;
    shape.offsetY = 0;
  }
}


function end(){
  fill(0);
  text('end for now', width/2, height/2);
}