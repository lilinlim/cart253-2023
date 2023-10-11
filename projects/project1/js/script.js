

function preload(){ 
    fontRegular = loadFont('assets/fonts/regular.ttf');
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
  
  if(state === 'title'){
        title();
  }
  else if (state === 'simulation'){
        simulation();
  }
  else if (state === 'end'){
        ending();
  }
}

function title(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('click to start', width/2, height/1.25);
    pop();
}

function mousePressed(){
    if(state === 'title'){
        state = 'simulation';
    }
}

function ending(){
  
}

function simulation(){

}