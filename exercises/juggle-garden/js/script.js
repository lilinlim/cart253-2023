"use strict";

let gravityForce = 0.0025;

let paddle;

//normal balls
let balls = [];
let numBalls = 15;

//soccer balls
let soccers = [];
let soccerBalls = 0;

//starting state
let state = 'simulation';

//counter for each ball type
let ballCounter = 0;
let soccerCounter = 0;

//distance for each ball type
let d = dist(paddle.x, paddle.y, ball.x, ball.y);
let dS = dist(paddle.x, paddle.y, soccer.x, soccer.y);

function setup() {
    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle(300, 30);

    //bounding balls to sim
    if(state === 'simulation'){
        for(let i = 0; i < numBalls; i++){
            let x = random(0, width);
            let y = random(-400, -100);
            let ball = new Ball(x, y);
            balls.push(ball);
        }
    
        for(let i = 0; i < soccerBalls; i++){
            let x = random(0, width);
            let y = random(-400, -100);
            let soccer = new Soccer(x, y);
            soccers.push(soccer);
        }
    }

}

function draw() {

    background(173, 216, 230);

    //bounding paddle to sim
    if(state === 'simulation'){
        paddle.move();
        paddle.display();
    }

    //states
    if(state === 'simulation'){
        simulation();
    }
    else if(state === 'end1'){
        end1();
    }
    else if(state === 'end2'){
        end2();
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

    for (let i = 0; i < soccers.length; i++) {
        let soccer = soccers[i];
        if(soccer.active) {
            soccer.gravity(gravityForce);
            soccer.move();
            soccer.bounce(paddle);
            soccer.display(); 
        }
    }
    
}


//add soccer ball when pressed
function mousePressed(){
    if(state === 'simulation'){
        soccers.push(new Soccer(mouseX, mouseY));
    }
}

//normal ending
function end1(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('end', width/2, height/2);
    pop();
}

//special ending
function end2(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('u got the special end!', width/2, height/2);
    pop();
}