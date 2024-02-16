/*****************
  project 2
  elle lilin lim

  drag and drop images to create ur idea lunch plater
*****************/

"use strict";

//images
let tray, utensils, bell;
let kimchi, gogi, bap, mandu, namul, gyeran, guk, radish;
let danmuji, dubu, kimbap, oi, sundae, sunny, tonkatsu, tteok;

//CHANGE SHAPE TO FOOD..
//shapes
let shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9;
let shape10, shape11, shape12, shape13, shape14, shape15, shape16, shape17;

//button
let button = {
  x: 720,
  y: 500,
  size: 80,
  fill: {
    r: 255,
    g: 255,
    b: 217
}
}

//setting up starting state
let state = 'title';

//dialogue 1
let dialogue = [
    'quick! its lunchtime',
    'select your desired dishes to eat on your break',
];

//dialogue 2
let dialogueAgain = [
    'when your meal is ready',
    'click the bell!'
]

let currentIndex = 0;
let secondIndex = 0;

//preloading images
function preload(){
  //images
  tray = loadImage('assets/images/tray.png');
  utensils = loadImage('assets/images/utensils.png');
  bell = loadImage('assets/images/bell.png');

  kimchi = loadImage('assets/images/kimchi.png');
  gogi = loadImage('assets/images/gogi.png');
  bap = loadImage('assets/images/bap.png');
  mandu = loadImage('assets/images/mandu.png');
  namul = loadImage('assets/images/namul.png');
  gyeran = loadImage('assets/images/gyeran.png');
  guk = loadImage('assets/images/guk.png');
  radish = loadImage('assets/images/radish.png');
  danmuji = loadImage('assets/images/danmuji.png');
  dubu = loadImage('assets/images/dubu.png');
  kimbap = loadImage('assets/images/kimbap.png');
  oi = loadImage('assets/images/oi.png');
  sundae = loadImage('assets/images/sundae.png');
  sunny = loadImage('assets/images/sunny.png');
  tonkatsu = loadImage('assets/images/tonkatsu.png');
  tteok = loadImage('assets/images/tteok.png');
}


function setup() {
    createCanvas(800, 600);

    //basic text traits
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
  
    makeFood();
}


function draw() {
    background(255, 192, 203);
    
    //text(dialogue[currentIndex], width/2, height/2);

    //states + function link
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

  //states 
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
  handleMousePressed(shape3);
  handleMousePressed(shape4);
  handleMousePressed(shape5);
  handleMousePressed(shape6);
  handleMousePressed(shape7);
  handleMousePressed(shape8);
  handleMousePressed(shape9);

  handleMousePressed(shape10);
  handleMousePressed(shape11);
  handleMousePressed(shape12);
  handleMousePressed(shape13);
  handleMousePressed(shape14);
  handleMousePressed(shape15);
  handleMousePressed(shape16);
  handleMousePressed(shape17);
    
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
    text('lunch rush', width/2, height/2);
}

function talking(){
    text(dialogue[currentIndex], width/2, height/2);
}

function stateTest(){
    text('insert image', width/2, height/2);
}

function talkingAgain(){
    text(dialogueAgain[secondIndex], width/2, height/2);
}

function simulation(){

  handleDragging(shape1);
  handleDragging(shape2);
  handleDragging(shape3);
  handleDragging(shape4);
  handleDragging(shape5);
  handleDragging(shape6);
  handleDragging(shape7);
  handleDragging(shape8);
  handleDragging(shape9);

  handleDragging(shape10);
  handleDragging(shape11);
  handleDragging(shape12);
  handleDragging(shape13);
  handleDragging(shape14);
  handleDragging(shape15);
  handleDragging(shape16);
  handleDragging(shape17);
  
  makeButton();

  imageAssociation();
}

//images linked to each shape
function imageAssociation(){
  imageMode(CENTER);

  image(tray, 400, 300);

  image(kimchi, shape1.x, shape1.y, 80, 80);
  image(bap, shape3.x, shape3.y, 120, 120);
  image(gogi, shape2.x, shape2.y, 100, 100);
  image(mandu, shape4.x, shape4.y, 100, 100);
  image(namul, shape5.x, shape5.y, 100, 100);
  image(gyeran, shape6.x, shape6.y, 100, 100);
  image(guk, shape7.x, shape7.y, 150, 150);
  image(radish, shape8.x, shape8.y, 100, 100);
  image(utensils, shape9.x, shape9.y, 100, 250);

  image(danmuji, shape10.x, shape10.y, 70, 70);
  image(dubu, shape11.x, shape11.y, 100, 100);
  image(kimbap, shape12.x, shape12.y, 120, 120);
  image(oi, shape13.x, shape13.y, 90, 90);
  image(sundae, shape14.x, shape14.y, 100, 100);
  image(sunny, shape15.x, shape15.y, 100, 100);
  image(tonkatsu, shape16.x, shape16.y, 150, 150);
  image(tteok, shape17.x, shape17.y, 150, 150);
}

function makeFood(){
  shape1 = createDraggableShape(100, 200, `#CBC3E3`);
  shape2 = createDraggableShape(100, 300, `#ADD8E6`);
  shape3 = createDraggableShape(100, 100, `#ADD8E6`);
  shape4 = createDraggableShape(100, 500, `#ADD8E6`);
  shape5 = createDraggableShape(200, 100, `#ADD8E6`);
  shape6 = createDraggableShape(300, 100, `#ADD8E6`);
  shape7 = createDraggableShape(250, 520, `#ADD8E6`);
  shape8 = createDraggableShape(600, 100, `#ADD8E6`);
  shape9 = createDraggableShape(600, 400, `#ADD8E6`);

  shape10 = createDraggableShape(100, 400, `#ADD8E6`);
  shape11 = createDraggableShape(500, 100, `#ADD8E6`);
  shape12 = createDraggableShape(700, 200, `#ADD8E6`);
  shape13 = createDraggableShape(400, 100, `#ADD8E6`);
  shape14 = createDraggableShape(700, 300, `#ADD8E6`);
  shape15 = createDraggableShape(700, 100, `#ADD8E6`);
  shape16 = createDraggableShape(410, 520, `#ADD8E6`);
  shape17 = createDraggableShape(560, 520, `#ADD8E6`);
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

//button visuals
function makeButton(){
  //noStroke();
  image(bell, button.x, button.y, 100 ,100);
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
  handleMouseReleased(shape3);
  handleMouseReleased(shape4);
  handleMouseReleased(shape5);
  handleMouseReleased(shape6);
  handleMouseReleased(shape7);
  handleMouseReleased(shape8);
  handleMouseReleased(shape9);

  handleMouseReleased(shape10);
  handleMouseReleased(shape11);
  handleMouseReleased(shape12);
  handleMouseReleased(shape13);
  handleMouseReleased(shape14);
  handleMouseReleased(shape15);
  handleMouseReleased(shape16);
  handleMouseReleased(shape17);
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

//ending text
function end(){
  fill(0);
  text('end for now', width/2, height/2);
}