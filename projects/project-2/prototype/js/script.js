/*****************
  project 2
  elle lilin lim

  drag and drop images to create a lunch plater
  click the screen when theres text+image, 
  but if not use L/R to move through dialogues
*****************/

"use strict";

//images
let tray, utensils, bell;
let kimchi, gogi, bap, mandu, namul, gyeran, guk, radish;
//extra images added later
let danmuji, dubu, kimbap, oi, sundae, sunny, tonkatsu, tteok;
//images cat
let catTitle, catLine, catEnding;

//foods
let food1, food2, food3, food4, food5, food6, food7, food8, food9,
  food10, food11, food12, food13, food14, food15, food16, food17;

//button to go from food sim to ending
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
  'you already made sure that everything is ready',
  'all the lunch options are cooked',
  'its time to serve them',
];

//dialogue 2
let dialogueAgain = [
  'omg! its the office worker you have a crush on',
  'dont let him fluster you during your work',
  'when the meal is ready',
  'click the bell to serve!'
]

//setting starting line value
let currentLine = 0;
let secondLine = 0;

//preloading images
function preload() {
  //images of other things
  tray = loadImage('assets/images/tray.png');
  utensils = loadImage('assets/images/utensils.png');
  bell = loadImage('assets/images/bell.png');

  //food images
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

  //cat images
  catTitle = loadImage('assets/images/cattitle.png');
  catLine = loadImage('assets/images/catline.png');
  catEnding = loadImage('assets/images/catending.png');
}


function setup() {
  createCanvas(800, 600);

  //basic text traits
  textAlign(CENTER, CENTER);
  textSize(32);
  stroke(255);
  strokeWeight(1);
  fill(0);

  //creating foods
  makeFood();
}


function draw() {
  background(255, 192, 203);

  //associating each state to its designed function
  if (state === 'title') {
    title();
  }
  else if (state === 'talking') {
    talking();
  }
  else if (state === 'catInLineState') {
    catInLineState();
  }
  else if (state === 'talkingAgain') {
    talkingAgain();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'end') {
    end();
  }
}

function mousePressed() {
  //states logic 
  if (state === 'title') {
    state = 'talking';
  }
  else if (state === 'catInLineState') {
    state = 'talkingAgain';
  }
  if (state === 'simulation' && mouseLoc()) {
    state = 'end';
  }

  //calls mouse press for each food
  handleMousePressed(food1);
  handleMousePressed(food2);
  handleMousePressed(food3);
  handleMousePressed(food4);
  handleMousePressed(food5);
  handleMousePressed(food6);
  handleMousePressed(food7);
  handleMousePressed(food8);
  handleMousePressed(food9);
  handleMousePressed(food10);
  handleMousePressed(food11);
  handleMousePressed(food12);
  handleMousePressed(food13);
  handleMousePressed(food14);
  handleMousePressed(food15);
  handleMousePressed(food16);
  handleMousePressed(food17);
}

function keyPressed() {
  //conditions to go previous dialog
  if (keyCode === LEFT_ARROW && state === 'talking') {
    //going back
    currentLine = currentLine - 1;

    //not allowing to go past what we have
    if (currentLine === -1) {
      currentLine = 0;
    }

  //conditions to go next dialog
  } else if (keyCode === RIGHT_ARROW && state === 'talking') {
    //going next
    currentLine = currentLine + 1;

    //condition to move onto next part
    if (currentLine === dialogue.length) {
      currentLine = dialogue.length - 1;
      state = 'catInLineState';
    }
  }

  //same code but modified for dialog 2
  if (keyCode === LEFT_ARROW && state === 'talkingAgain') {
    secondLine = secondLine - 1;

    if (secondLine === -1) {
      secondLine = 0;
    }

  } else if (keyCode === RIGHT_ARROW && state === 'talkingAgain') {
    secondLine = secondLine + 1;

    if (secondLine === dialogueAgain.length) {
      secondLine = dialogueAgain.length - 1;
      state = 'simulation';
    }
  }
}

//title screen
function title() {
  imageMode(CENTER);
  image(catTitle, 450, 350);
  text('lunch crush', width / 2, 530);
}

//dialogue 1
function talking() {
  //displaying dialogue
  text(dialogue[currentLine], width / 2, height / 2);
}

//scene
function catInLineState() {
  imageMode(CENTER);
  image(catLine, 400, 300);
  text('the lines are getting busy fast', width / 2, 530);
}

//second dialogue
function talkingAgain() {
  text(dialogueAgain[secondLine], width / 2, height / 2);
}

function simulation() {

  handleDragging(food1);
  handleDragging(food2);
  handleDragging(food3);
  handleDragging(food4);
  handleDragging(food5);
  handleDragging(food6);
  handleDragging(food7);
  handleDragging(food8);
  handleDragging(food9);
  handleDragging(food10);
  handleDragging(food11);
  handleDragging(food12);
  handleDragging(food13);
  handleDragging(food14);
  handleDragging(food15);
  handleDragging(food16);
  handleDragging(food17);

  //button creation
  makeButton();

  //food to image
  imageAssociation();
}

//images linked to each food
function imageAssociation() {
  imageMode(CENTER);

  //images linking to each shape's location + size
  image(tray, 400, 300);
  image(kimchi, food1.x, food1.y, 80, 80);
  image(bap, food3.x, food3.y, 120, 120);
  image(gogi, food2.x, food2.y, 100, 100);
  image(mandu, food4.x, food4.y, 100, 100);
  image(namul, food5.x, food5.y, 100, 100);
  image(gyeran, food6.x, food6.y, 100, 100);
  image(guk, food7.x, food7.y, 150, 150);
  image(radish, food8.x, food8.y, 100, 100);
  image(utensils, food9.x, food9.y, 100, 250);
  image(danmuji, food10.x, food10.y, 70, 70);
  image(dubu, food11.x, food11.y, 100, 100);
  image(kimbap, food12.x, food12.y, 120, 120);
  image(oi, food13.x, food13.y, 90, 90);
  image(sundae, food14.x, food14.y, 100, 100);
  image(sunny, food15.x, food15.y, 100, 100);
  image(tonkatsu, food16.x, food16.y, 150, 150);
  image(tteok, food17.x, food17.y, 150, 150);
}

//creating each food item + making sure its draggable and locations
function makeFood() {
  food1 = createDraggablefood(100, 200, `#CBC3E3`);
  food2 = createDraggablefood(100, 300, `#ADD8E6`);
  food3 = createDraggablefood(100, 100, `#ADD8E6`);
  food4 = createDraggablefood(100, 500, `#ADD8E6`);
  food5 = createDraggablefood(200, 100, `#ADD8E6`);
  food6 = createDraggablefood(300, 100, `#ADD8E6`);
  food7 = createDraggablefood(250, 520, `#ADD8E6`);
  food8 = createDraggablefood(600, 100, `#ADD8E6`);
  food9 = createDraggablefood(600, 400, `#ADD8E6`);
  food10 = createDraggablefood(100, 400, `#ADD8E6`);
  food11 = createDraggablefood(500, 100, `#ADD8E6`);
  food12 = createDraggablefood(700, 200, `#ADD8E6`);
  food13 = createDraggablefood(400, 100, `#ADD8E6`);
  food14 = createDraggablefood(700, 300, `#ADD8E6`);
  food15 = createDraggablefood(700, 100, `#ADD8E6`);
  food16 = createDraggablefood(410, 520, `#ADD8E6`);
  food17 = createDraggablefood(560, 520, `#ADD8E6`);
}

//creating food hitbox
function createDraggablefood(x, y, color) {
  let food = {
    x: x,
    y: y,
    size: 100,
    isBeingDragged: false,
    offsetX: 0,
    offsetY: 0,
    fill: color,
  };
  return food;
}

//button visuals
function makeButton() {
  image(bell, button.x, button.y, 100, 100);
}

//clickable button
function mouseLoc() {
  //bounding it to a state
  if (state === 'simulation') {
    //using the dist method to location mouse to button
    let d = dist(mouseX, mouseY, button.x, button.y);
    //if its pressed + in button, button works
    if (d < button.size / 2) {
      return true;
    } else {
      return false;
    }
  }
}

//moving of food
function handleDragging(food) {
  if (food.isBeingDragged) {
    //new positions w/ offset in mind
    food.x = mouseX + food.offsetX;
    food.y = mouseY + food.offsetY;

    //limiting food to in canvas
    food.x = constrain(food.x, 0, width);
    food.y = constrain(food.y, 0, height);
  }
}

//makes sure mouse is inside of food
function mouseIsInsidefood(food) {
  //dist method
  let d = dist(mouseX, mouseY, food.x, food.y);
  //if mouse is inside food then food can be dragged
  if (d < food.size / 2) {
    return true;
  } else {
    return false;
  }
}

//food is being clicked to start dragging
function handleMousePressed(food) {
  if (mouseIsInsidefood(food)) {
    //letting food be dragged
    food.isBeingDragged = true;
    //offsetting food
    food.offsetX = food.x - mouseX;
    food.offsetY = food.y - mouseY;
  }
}

//mouse released for all food
function mouseReleased() {
  handleMouseReleased(food1);
  handleMouseReleased(food2);
  handleMouseReleased(food3);
  handleMouseReleased(food4);
  handleMouseReleased(food5);
  handleMouseReleased(food6);
  handleMouseReleased(food7);
  handleMouseReleased(food8);
  handleMouseReleased(food9);
  handleMouseReleased(food10);
  handleMouseReleased(food11);
  handleMouseReleased(food12);
  handleMouseReleased(food13);
  handleMouseReleased(food14);
  handleMouseReleased(food15);
  handleMouseReleased(food16);
  handleMouseReleased(food17);
}

function handleMouseReleased(food) {
  //makes sure its being dragged
  if (!food.isBeingDragged) {
    return;
  }

  {
    //resetting parameters once not dragged
    food.isBeingDragged = false;
    food.offsetX = 0;
    food.offsetY = 0;
  }
}

//ending scene
function end() {
  imageMode(CENTER);
  image(catEnding, 450, 350);
  text('he enjoyed the meal!', width / 2, 530);
}