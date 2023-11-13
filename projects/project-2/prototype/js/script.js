"use strict";

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
}

function mousePressed() {

    if(state === 'title'){
        state = 'talking';
    }
    else if(state === 'stateTest'){
        state = 'talkingAgain';
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
    ellipse(300, 300, 100);
}