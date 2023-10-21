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

function preload(){ 
    fontRegular = loadFont('assets/fonts/regular.ttf');
}

function setup() {
    createCanvas(800, 600);

    textFont(fontRegular);

    //noCursor();
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
    
function mousePressed(){
      
    if(state === 'title'){
        state = 'explanation';
    }
    else if(state === 'explanation'){
        state = 'simulation'
    }
    else if(state === 'simulation'){
      rice.size = rice.size - 10;
      if(rice.size === 150){
        state = 'end';
      }
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