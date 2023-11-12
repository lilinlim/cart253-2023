"use strict";

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
    fill(255);
}


function draw() {
    background(0);

    text(dialogue[currentIndex], width/2, height/2);
}

function mousePressed() {
    currentIndex = currentIndex + 1;

    if(currentIndex === dialogue.length){
        currentIndex = dialogue.length - 1;
    }
}