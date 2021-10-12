class Brick {

  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = "pink"
  }

  draw() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }

  checkCollision() {
    if (ball1.x < this.x + this.w && ball1.x + ball1.w > this.x &&ball1.y < this.y + this.h && ball1.y + ball1.h > this.y) {
      this.c = "red"

      // Tell the ball the position of the specific brick the ball has hit
      const index = bricks.indexOf(this);
      // Remove the brick in question
      if (index > -1) {
        bricks.splice(index, 1);        
      }
      // When the ball has hit the brick then change the ball in the opposite vertical direction from wich it hit the ball
      ball1.vy = ball1.vy * -1;
    }
    else {
      this.c = "pink"
    }
  }
}