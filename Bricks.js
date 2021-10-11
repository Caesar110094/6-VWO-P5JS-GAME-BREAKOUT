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
      // nu ook vberical
      this.c = "red"
      
      // 
      const index = bricks.indexOf(this);
      // 
      if (index > -1) {
        bricks.splice(index, 1);
      }
      // 
      ball1.vy = ball1.vy * -1;
    }
    else {
      this.c = "pink"
    }
  }
}