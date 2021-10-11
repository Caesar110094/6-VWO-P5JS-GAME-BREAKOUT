class Ball {
// 30, 200, 25, 25, 5, 5, "green"
  constructor() {
    this.x = 30;
    this.y = 200;
    this.w = 20;
    this.h = 20;
    this.vx = 5;
    this.vy = 5;
    this.c = "green";
  }


  drawBall() {
    fill(this.c)
    ellipse(this.x, this.y, this.w, this.h);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x <= 0 || this.x >= 600) {
      this.vx = this.vx * -1;
    }

    if (this.y <= 25 || this.y >= 386) {
      this.vy = this.vy * -1;
    }
  }
}