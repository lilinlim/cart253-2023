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
        title();
  }
  else if (state === 'simulation'){
        simulation();
  }
  else if (state === 'end'){
        ending();
  }
  else if (state === 'testo'){
        test();
  }
  else if (state === 'eggo'){
        eg();
  }
  else if (state === 'exa2'){
        ex2();
  }
  else if (state === 'exa3'){
        ex2();
  }
}

function mouseClicked(){
    if(state === 'title'){
        state = 'simulation';
   }
    else if(state === 'simulation'){
        state = 'end';
    }
  else if (state === 'end'){
           state = 'testo';
    }
  else if(state === 'testo'){
          state = 'eggo';
          }
  
  else if (state === 'eggo'){
           state = 'exa2';
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

function simulation(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('nyaaa', width/2, height/1.25);
    pop();
}

function ending(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('end??', width/2, height/1.25);
    pop();
}

function test(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('test123', width/2, height/1.25);
    pop();
}

function eg(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('egg.', width/2, height/1.25);
    pop();
}

function ex2(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('ex2.', width/2, height/1.25);
    pop();
}

function ex3(){
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text('ex3.', width/2, height/1.25);
    pop();
}
