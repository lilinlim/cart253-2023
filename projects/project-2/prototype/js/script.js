"use strict";

let food = {
    x: 300,
    y: 300,
    size: 200,
    fill: {
        r: 48,
        g: 60,
        b: 110
    }
}

var clicks = 0;

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

function setup() {
    createCanvas(600, 600);

    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
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
    else if(state === 'simulation' && mouseInsideFood()){
        clicking();
    }

    
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
    noStroke();
    ellipse(food.x, food.y, food.size);

    if(clicks < 5){
        fill(food.fill.r, food.fill.g, food.fill.b);
    }
    else if(clicks > 10 && clicks < 15){
        food.fill.r = 103;
        food.fill.g = 144;
        food.fill.b = 194;
        fill(food.fill.r, food.fill.g, food.fill.b);
    }
    else if(clicks > 15){
        food.fill.r = 161;
        food.fill.g = 218;
        food.fill.b = 230;
        fill(food.fill.r, food.fill.g, food.fill.b);
    }
}

function clicking(){
    clicks++;
    if(clicks == 16){
        state = 'end';
    }
}

function mouseInsideFood(){
    if(state === 'simulation'){
      let d = dist(mouseX, mouseY, food.x, food.y);
      if (d < food.size / 2){
        return true;
      } else {
        return false;
      }
    }
  }

function end(){
    text('end for now', width/2, height/2);
}