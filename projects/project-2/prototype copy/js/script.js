"use strict";

//images
let kimchi;

var kimchiX, kimchiY, kimchiW, kimchiH;
var kimchiOffSetX, kimchiOffSetY;
var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?


function preload(){
  kimchi = loadImage('assets/images/kimchi.png');
}

function setup() {
    createCanvas(800, 600);

    kimchiX = 100;
    kimchiY = 100;
    kimchiW = 100;
    kimchiH = 100;
}


function draw() {
    background(255, 192, 203);
    // Is mouse over object
  if (mouseX > kimchiX && mouseX < kimchiX + kimchiW 
    && mouseY > kimchiY && mouseY < kimchiY + kimchiH) {
    rollover = true;
  } else {
    rollover = false;
  }

  //CONSTRAIN
  // Adjust location if being dragged
  if (dragging) {
    kimchiX = mouseX + kimchiOffSetX;
    kimchiY = mouseY + kimchiOffSetY;
  }
  
  stroke(0);

  image(kimchi, kimchiX, kimchiY);


}


function mousePressed() {

  if (mouseX > kimchiX && mouseX < kimchiX + kimchiW 
    && mouseY > kimchiY && mouseY < kimchiY + kimchiH) {
    dragging = true;

    kimchiOffSetX = kimchiX - mouseX;
    kimchiOffSetY = kimchiY - mouseY;
  }
  

}


function mouseReleased() {
  // Quit dragging
  dragging = false;
}