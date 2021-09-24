class Ball {

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