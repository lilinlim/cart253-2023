"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 1;

let state = 'simulation';

let ballCounter = 0;

let d = dist(paddle.x, paddle.y, ball.x, ball.y);

function setup() {

    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle(300, 30);

    for(let i = 0; i < numBalls; i++){
        let x = random(0, width);
        let y = random(-400, -100);
        let ball = new Ball(x, y);
        balls.push(ball);
    }

}

function draw() {

    background(0);

    paddle.move();
    paddle.display();

    if(state === 'simulation'){
        simulation();
    }
    else if(state === 'end1'){
        end1();
    }

    
}

function simulation(){

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if(ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display(); 
        }
    }

    
}


//add one
function mousePressed(){
    balls.push(new Ball(mouseX, mouseY));
}

//end1 all balls out
function ballsGone(){
    if(ball.y < 0) {
        ballCounter++;
        text(ballCounter, width/2, height/2);
        if(ballCounter = 3){
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

//end2 