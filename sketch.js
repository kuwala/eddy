function setup() {
  // cnvs = createCanvas(1200, 2000);
  var myWidth = 200;
  cnvs = createCanvas(window.innerWidth, myWidth);
  cnvs.parent("p5canvas");
  // mover = new Mover(20, 20);
  movers = [];
  movers.push(new Mover(100, 100));
  movers.push(new Mover(random(window.innerWidth), random(myWidth)));
  movers.push(new Mover(random(window.innerWidth), random(myWidth)));
  frameRate(30);


}
function Mover(xx, yy) {
  this.x = xx;
  this.y = yy;
  this.size = 20 + random(10);
  this.life = 0;

  this.update = function () {
    this.life += 0.1;
    this.x += random(4) - 2;
    this.y += random(4) - 2;
    // var mod = random(8);
    mod = this.life % 10;
    fill(60 + mod*2);
    // rect(this.x,this.y, this.size, this.size);
    textSize(16 + mod*10);
    text("e", this.x, this.y )
  }

}
function draw() {
  // rect(20,20,30,30);
  clear();
  // mover.update();
  // background(51);
  fill(60);
  ellipse(width/2,height/2,100,100);
  for (var i = 0; i < movers.length; i++) {
    movers[i].update();
  }

}
function touchStarted() {
  mousePressed();
}
function mousePressed() {
  // stuff
  console.log("mouse pressed");
  movers.push(new Mover(mouseX, mouseY));

}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
