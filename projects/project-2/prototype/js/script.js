"use strict";

//setting up starting state
let state = 'title';

let dialogue = [
    'hi',
    'this is a test',
    'to see if it works',
    'hopefully it does',
];

let currentIndex = 0;

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
}

function mousePressed() {

    if(state === 'title'){
        state = 'talking';
    }

    else if(state === 'talking'){
        currentIndex = currentIndex + 1;

        if(currentIndex === dialogue.length){
            currentIndex = dialogue.length - 1;
            state = 'stateTest';
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
    text('state test', width/2, height/2);
}