class Bricks() {
  constructor (x, y) {
  this.rx = x
  this.ry = y
  }
  
  drawBricks() {
    noStroke()
    fill(255, 204, 100);
    rect(this.rx, this.ry, 60, 25);
  }
}