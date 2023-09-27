let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
};

let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255
    //im: catImage
};

let numStatic = 5000;

let catImage;
let fishImage;

//preloading images
function preload(){
    catImage = loadImage('assets/images/cat.png');
    fishImage = loadImage('assets/images/fish.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0, height);
    covid19.vx = covid19.speed;

    noCursor();
}


function draw() {
    background(255, 218, 221);

    //display static
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        fill(176, 224, 230, 30);
        square(x, y, 10);
        
        fill(100,149,237, 30);
        square(x, y, 10);
    }

    //c19 mov
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if(covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
    }

    //user mov w/ keys
    if (keyIsDown(LEFT_ARROW)) {
        user.x -= 15;
      }
  
      if (keyIsDown(RIGHT_ARROW)) {
        user.x += 15;
      }
  
      if (keyIsDown(UP_ARROW)) {
        user.y -= 15;
      }
  
      if (keyIsDown(DOWN_ARROW)) {
        user.y += 15;
      }

    //user image fish
    imageMode(CENTER);
    image(fishImage, user.x, user.y, 100, 100);

    //c19 image cat
    imageMode(CENTER);
    image(catImage, covid19.x, covid19.y, 100, 100);

    //check for catching c19
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if(d < covid19.size/2 + user.size/2) {
        noLoop();
    }

    //c19 follows user when within a certain distance
    if(d < 250){
        //covid19.size = covid19.size + 10;
        covid19.x += (user.x - covid19.x) * 0.04;
        covid19.y += (user.y - covid19.y) * 0.04;
      //}else{
        //covid19.size = 100;
      }

}