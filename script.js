var allblocks = []
var x;
var y;
var screen = 1;
var ball1;
var paddle;
var [xpos, ypos, xspeed, yspeed] = [250, 370, 0, 0];
var bricks = [];

let song;

function preload() {
  sb = loadImage('Images/Background game.jpg');
  go = loadImage('Images/Game Over.png');
  ws = loadImage('Images/Winning.gif')
  song = loadSound('Music/Title Screen.mp4');
  gamesong = loadSound('Music/Game music.mp4')
  death = loadSound('Sound/Death Sound.mp4');
  colliedes = loadSound('Sound/Ball Colliedes.mp4');
}

function setup() {
  createCanvas(600, 400);

  ball1 = new Ball();
  paddle = new Paddle();

  drawRow(20);
  drawRow(50);
  drawRow(80);
  drawRow(110);
}

function drawRow(rowHeight) {
  for (let i = 0; i < 10; i++) {
    brickwidth = width / 10;
    x = i * brickwidth;
    y = rowHeight;
    h = 20;

    bricks.push(new Brick(x + 4.5, y, brickwidth - 10, h));
  }
}

function draw() {
  if (screen == 0) {
    background(96, 157, 255);
    fill(255);
    textAlign(CENTER);
    text('BREAKOUT', width / 2, height / 2);
    song.play();
  }

  if (screen == 1) {
    background(sb);

    ball1.drawBall();
    paddle.drawPaddle();
    paddle.checkCollision();

    bricks.forEach((b) => {
      b.draw();
      b.checkCollision();
    })

    gamesong.play();

  }

  if (ball1.y >= 386) {
    screen = 2;
   }

  if (screen == 2) {
    background(go);
    textAlign(CENTER);
    textSize(40);
    text("GAME OVER", width / 2, height / 2);
    death.play();
  }

  if (bricks.length === 0) { 
   screen = 3;
  }

  if (screen == 3) {
    background(ws)
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

  if (keyCode == 49) {
    screen = 0;
  }

  if (keyCode == 13) {
    screen = 1;
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