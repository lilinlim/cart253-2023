/**
 * i like to move it
 * (elle) lilin lim
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

/**
 * Description of setup
*/

let sizeC = 10; // big circle size

function setup() {

    createCanvas(400, 400); //base canvas sizing

}


/**
 * Description of draw()
*/
function draw() {
    background(220); //bg clr

    //changing color based on mouse y position
    let c = map(mouseY, 0, height, 0, 255); //clr for smaller circles

    let xc = constrain(mouseX, 0, width); //x limits for bottom circle

    let xc2 = constrain(mouseX, 100, 300); //x limits for top circle

    let xc3 = constrain(mouseX, 50, 350); //x limits for middle circle

    //draw the big circle
    fill(0);
    circle(width/2, height/2, sizeC);
        sizeC = sizeC + 1; //changing its size

    noStroke();
    fill(255, c, 200);

    ellipse(xc2, 100, 50, 50); //top circle
    ellipse(xc3, 200, 50, 50); //middle circle
    ellipse(xc, 300, 50, 50); //bottom circle
}