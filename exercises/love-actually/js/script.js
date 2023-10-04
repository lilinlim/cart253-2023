let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255
};

let egg = { 
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 1
};

let state = 'title';

let timer = 3;

let chickIm;
let hatchIm;
let eggIm;
let shellIm;

function preload(){
    chickIm = loadImage('assets/images/chick.png');
    hatchIm = loadImage('assets/images/hatch.png');
    eggIm = loadImage('assets/images/egg.png');
    shellIm = loadImage('assets/images/shell.png');
}

function setup() {
    createCanvas(500, 500);
    setupObjects();

    noCursor();
}

function setupObjects(){
  
    //starting positions
    user.x = width/3;
    egg.x = random(width);

    egg.vx = random(-egg.speed, egg.speed);
    egg.vy = random(-egg.speed, egg.speed);
  
}

function draw() {
    background(0);

    if(state === 'title'){
        title();
    }
    else if (state === 'simulation'){
        simulation();
        timerShow();
    }
    else if (state === 'love'){
        love();
    }
    else if (state === 'sadness'){
        sadness();
    }
    else if(state === 'timeDone'){
      timeDone();
    }

    //simulation();
}

function title(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('friend or food?', width/2, height/2);
    pop();
}

function simulation(){
    move();
    checkOffscreen();
    checkOverlap();
    display();
    //eggStates();
}

function love(){
    push();
    textSize(64);
    fill(200, 150, 150);
    textAlign(CENTER, CENTER);
    text('friend!', width/2, height/2);
    pop();
}

function sadness(){
    push();
    textSize(64);
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text('neither :(', width/2, height/2);
    pop();
}

function timeDone(){
    push();
    textSize(64);
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text('food', width/2, height/2);
    pop();
}

function move(){
    //chick to mouse
    user.x = mouseX;
    user.y = mouseY;

    //egg movement
    egg.x = egg.x + egg.vx;
    egg.y = egg.y + egg.vy;
}

function checkOffscreen(){
    //check if objects are offscreen
    if(isOffscreen(user) || isOffscreen(egg)) {
       state = 'sadness';
   }
}

function isOffscreen(circle){
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height ){
        return true;
    }
    else {
        return false;
    }
}

function checkOverlap(){
    //check if objects overlap
    let d = dist(user.x, user.y, egg.x, egg.y);
    if ( d < user.size/2 + egg.size/2){
        state = 'love';
    }
}

function display(){
    //user display
    imageMode(CENTER);
    image(chickIm,user.x, user.y, 100, 100);

    eggStates();
}

function mousePressed(){
    if(state === 'title'){
        state = 'simulation';
    }
}


function timerShow(){
    push();
    textSize(50);
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text(timer, width/2, height/4);
    pop();

    if (frameCount % 60 == 0 && timer > 0) { 
        timer --;
    }

    if (timer == 0) {
        state = 'timeDone';
    }
}

function eggStates() {

    if(state === 'title'){
        title();
    }
    else if (state === 'simulation'){
        imageMode(CENTER);
        image(shellIm, egg.x, egg.y, 100, 100);
    }
    else if (state === 'love'){
        imageMode(CENTER);
        image(hatchIm, egg.x, egg.y, 100, 100);
    }
    else if (state === 'sadness'){
        imageMode(CENTER);
        image(eggIm, egg.x, egg.y, 100, 100);
    }
    else if(state === 'timeDone'){
        imageMode(CENTER);
        image(eggIm, egg.x, egg.y, 100, 100);
    }

    //simulation();
}