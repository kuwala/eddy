function setup() {
  cnvs = createCanvas(1200, 2000);
  cnvs.parent("p5canvas");
  // mover = new Mover(20, 20);
  movers = [];
  movers.push(new Mover(100, 100));
  frameRate(30);


}
function Mover(xx, yy) {
  this.x = xx;
  this.y = yy;
  this.size = 20 + random(10);

  this.update = function () {
    this.x += random(4) - 2;
    this.y += random(4) - 2;
    rect(this.x,this.y, this.size, this.size);
  }

}
function draw() {
  // rect(20,20,30,30);
  clear();
  // mover.update();
  for (var i = 0; i < movers.length; i++) {
    movers[i].update();
  }

}
function mousePressed() {
  // stuff
  console.log("mouse pressed");
  movers.push(new Mover(mouseX, mouseY));

}
