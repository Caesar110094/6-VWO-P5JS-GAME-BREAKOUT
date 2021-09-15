class Bal{
  
  constructor (x , y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.with = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.c = c; 
  }


  drawBall(){
    fill(this.c)
    ellipse(this.x, this.y,20,20);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
 

    if(this.x <= 25 || this.x >= 585) {
      this.vx = this.vx * -1;
    }

    if(this.y <= 25 || this.y >= 385) {
      this.vy = this.vy * -1;
    }
  }
}


var bal1;
var [xpos, ypos, xspeed, yspeed] = [250, 370, 0, 0];

function setup() {
  createCanvas(600, 400);

  sb = loadImage('Images/Background.jpg');

  bal1 = new Bal(30,200,50,50,5,5, "green");
}

function draw() {
  background(sb);
  bal1.drawBall();

  rect(xpos, ypos, 100, 20);
	
	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = -2;
			break;
		case 39:
		case 68:
			xspeed = 2;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
	}
}