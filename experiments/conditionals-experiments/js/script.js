/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

let backgroundShade = 0;
let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 5
}

function setup() {
    createCanvas(500, 500);
}


function draw() {
    background(backgroundShade);

    circle.x = circle.x + circle.speed;

    if(circle.x > width) {
        circle.speed = -circle.speed;
    }

    if(circle.x < 0) {
        circle.speed = -circle.speed;
    }

    if(mouseY < heigth/2){
        fill(255, 0, 0);
    }

    if(mouseY > heigth/2){
        fill(0, 0, 255);
    }

    ellipse(circle.x, circle.y, circle.size);

}