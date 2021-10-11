class Paddle {

  constructor() {
    this.x = 100;
    this.y = 350;
    this.w = 100;
    this.h = 20;
    this.c = "green";
  }

  drawPaddle() {    
    
    fill(this.c);

    let leftWall = 0;
    let rightWall = 499;
    let xc = constrain(mouseX, leftWall, rightWall);
    rect(xc, this.y, this.w, this.h);
    this.x = mouseX;
  }


  checkCollision() {    
    if (ball1.x < this.x + this.w && ball1.x + ball1.w > this.x && ball1.y < this.y + this.h && ball1.y + ball1.h > this.y) {
      ball1.vy = ball1.vy * -1;
    }
    else {
      this.c = "green"
    }
  }
}