class Ball {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.size = 40;
        this.active = true;
    }

    gravity(force){
        this.ay = this.ay + force;
    }

    move(){
        this.vx = this.vx + this.ax;
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if(this.y - this.size/2 > height){
            this.active = false;
        }

        //bounces off the wall
        if(this.x > width || this.x < 0){
            this.vx *= -1;
        }
    }

    bounce(paddle){
        if (this.x > paddle.x - paddle.width/2 &&
            this.x < paddle.x + paddle.width/2 &&
            this.y + this.size/2 > paddle.y - paddle.height/2 &&
            this.y - this.size/2 < paddle.y + paddle.height/2){

            ballCounter++;
            fill(255);
            text(ballCounter, width/2, height/2);
            if(ballCounter == 6){
                state = 'end1';
            }
            
            //bounce
            let dx = this.x - paddle.x;
            this.vx = this.vx + map(dx, -paddle.width/2, paddle.width/2, -2, 2);

            this.vy = -this.vy;
            this.ay = 0;
        }
    }

    display(){
        push();
        fill(255, 50, 50);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
    }

}