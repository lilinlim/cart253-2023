let rice = {
    x: 200,
    y: 200,
    size: 200,
    fill: {
      r: 255,
      g: 223,
      b: 216
  }
}
  
let state = 'title';

var clicks = 0;

let timer = 3;

//images

function preload(){ 
    fontRegular = loadFont('assets/fonts/regular.ttf');

    //images
}

function setup() {
    createCanvas(800, 600);

    textFont(fontRegular);

    //noCursor(); //custom cursor?
}

function draw() {
    background(220);
  
    if(state === 'title'){
        title()
      }
      else if(state === 'explanation'){
        explanation();
      }
      else if(state === 'simulation'){
        simulation();
      }
      else if(state === 'end'){
        ending();
      }
      else if(state === 'credits'){
        credits();
      }
      else if(state === 'timeDone'){
        timeDone();
      }
}
    
function title(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('title', width/2, height/2);
    pop();
 }
    
function explanation(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('blablabla', width/2, height/1.25);
    pop();
}
    
function simulation(){
      
    noStroke();
    fill(rice.fill.r, rice.fill.g, rice.fill.b);
    ellipse(rice.x, rice.y, rice.size);
      
    //if(rice.size === 170){rice.fill(255, 204, 230);}
      
}

function mouseLoc(){
  if(state === 'simulation'){
    let d = dist(mouseX, mouseY, rice.x, rice.y);
    if (d < rice.size / 2){
      return true;
    } else {
      return false;
    }
  }
}
    
function mousePressed(){
      
    if(state === 'title'){
        state = 'explanation';
    }
    else if(state === 'explanation'){
        state = 'simulation'
    }
    else if(state === 'simulation'){
      //rice.size = rice.size - 10;
      //if(rice.size === 150){state = 'end';}

      rice.size = rice.size - 50;
    clicks ++;
    if(clicks == 3){
      state = 'end';
    }
    //if(clicks == 2){
      
   // }
    }
    else if(state === 'end'){
        state = 'credits';
    }
      
}
    
function ending(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('end??', width/2, height/1.25);
    pop();
}
    
function credits(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('credits', width/2, height/1.25);
    pop();
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

function timeDone(){
  push();
  textSize(64);
  fill(150, 150, 255);
  textAlign(CENTER, CENTER);
  text('too late', width/2, height/2);
  pop();
}