
let egg = { 
    x: 200,
    y: 200,
    size: 100,
};

var clicks = 0;

let state = 'simulation';

//images
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
    createCanvas(400, 400);
}


function draw() {
    background(220);

    if (state === 'simulation'){
        simulation();
    }
}

function simulation(){
    //imageMode(CENTER);
    egg = image(shellIm, egg.x, egg.y, 100, 100);

    if(state === 'simulation' && clicks<5){
        egg = image(shellIm, egg.x, egg.y, 100, 100);
    }
    else if(state === 'simulation' && clicks > 5 && clicks < 8){
        egg = image(hatchIm, egg.x, egg.y, 100, 100);
    }

}

function mouseLoc(){
    if(state === 'simulation'){
      let d = dist(mouseX, mouseY, egg.x, egg.y);
      if (d < egg.size / 2){
        return true;
      } else {
        return false;
      }
    }
  }

function mousePressed(){
    if(state === 'simulation' && mouseLoc()){
        clicks++;
    }
}