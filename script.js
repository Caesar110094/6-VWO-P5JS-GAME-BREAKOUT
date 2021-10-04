var allblocks = []
var x;
var y;
var screen = 0
var ball1, paddle;
var [xpos, ypos, xspeed, yspeed] = [250, 370, 0, 0];
var bricks = [];

let song;

function preload() {
  //song = loadSound('Music/Title Screen.mp4');
}

function setup() {
  createCanvas(600, 400);

  sb = loadImage('Images/Background game.jpg');

  ball1 = new Ball(30, 200, 50, 50, 5, 5, "green");

  drawRow(20);
  drawRow(50);
  drawRow(80);
  drawRow(100);
}

function drawRow(rowHeight) {
  for (let i = 0; i < 10; i++) {
    brickwidth = width / 10;
    x = i * brickwidth;
    y = rowHeight;
    h = 20;

    bricks.push(new Brick(x + 4.5, y, brickwidth - 10, h));
    console.log(bricks);
  }
}

function draw() {
  if (screen == 0) {

    background(96, 157, 255)
    fill(255)
    textAlign(CENTER);
    text('BREAKOUT', width / 2, height / 2);
    //song.play();
  }

  else if (screen == 1) {
    background(sb);

    let leftWall = 0;
    let rightWall = 499;

    let xc = constrain(mouseX, leftWall, rightWall);

    ball1.drawBall();
    rect(xc, 350, 100, 20);
    xpos += xspeed;



    bricks.forEach((b) => {
      b.draw();
    })


    // allblocks.forEach((b) => {
    //   b.draw();
    //   rect(xc, 350, 100, 20);
    //   xpos += xspeed;
    // });

  }
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