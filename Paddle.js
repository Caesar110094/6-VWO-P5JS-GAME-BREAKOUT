class Paddle() {
  
  constructor(c) {
    this.c = c;
  }

  drawPaddle() {
    fill(this.c)
    rect(xc, 350, 100, 20);
  }
  
  xpos += xspeed;
}