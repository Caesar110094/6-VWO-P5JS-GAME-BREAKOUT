class Bal {

  constructor(x, y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.with = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.c = c;
  }


  drawBall() {
    fill(this.c)
    ellipse(this.x, this.y, 20, 20);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;


    if (this.x <= 25 || this.x >= 585) {
      this.vx = this.vx * -1;
    }

    if (this.y <= 25 || this.y >= 385) {
      this.vy = this.vy * -1;
    }
  }
  paddle() {
    fill(this.c)
    rect(xpos, ypos, 100, 20);

    if (xpos >= 100 && xpos + 50 <= 500) xpos += xspeed;
  }
}

var x;
var y;
var screen = 0
var bal1, paddle, song;
var [xpos, ypos, xspeed, yspeed] = [250, 370, 0, 0];

function preload() {

}

function setup() {
  createCanvas(600, 400);

  sb = loadImage('Images/Background.jpg');

  bal1 = new Bal(30, 200, 50, 50, 5, 5, "green");
}

function draw() {
  if (screen == 0) {

    background(96, 157, 255)
    fill(255)
    textAlign(CENTER);
    text('BREAKOUT', width / 2, height / 2)
  } else if (screen == 1)
    background(sb);
  
  let leftWall = 0;
  let rightWall = 500;
   
  stroke(150);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);
  
  let xc = constrain(mouseX, leftWall, rightWall);


  bal1.drawBall();
  rect(xc, 350, 100, 20);
  //if(xpos >= 20 && xpos + 50 <= 400) 
  xpos += xspeed;
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 1) {
    if (mouseX > x && mouseX < x + 50 && mouseY > y && mouseY < y + 50) {
      if (colorPicker == 0) {
        screen = 2;
      } else {
        score += 1;
        speed += .05;
      }
    }
  } else if (screen == 2) {
    screen = 0
  }
}

function keyPressed() {
  switch (keyCode) {
    case 37:
    case 65:
      xspeed = -10;
      break;
    case 39:
    case 68:
      xspeed = 10;
      break;
  }
}

function keyReleased() {
  switch (keyCode) {
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