class Bal{
  
  constructor (x , y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.with = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.c = c; 
  }


  drawBall(){
    fill(this.c)
    ellipse(this.x, this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
 

    if(this.x <= 25 || this.x >= 475) {
      this.vx = this.vx * -1;
    }

    if(this.y <= 25 || this.y >= 475) {
      this.vy = this.vy * -1;
    }
  }
}


var bal1;

function setup() {
  createCanvas(500, 500);
  background(150);

  bal1 = new Bal(30,200,50,50,5,5, "green");
}

function draw() {
  bal1.drawBall();
}
