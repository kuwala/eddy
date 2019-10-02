var oldMouseX = 0;

function setup() {
  // cnvs = createCanvas(1200, 2000);
  var myHeight = 800;
  cnvs = createCanvas(window.innerWidth, myHeight);
  cnvs.parent("p5canvas");

  movers = [];
  // movers.push(new Mover(100, 100));

  // make some initial eddiez
  for (var i = 0; i < 5; i++) {
    var itsX = random(window.innerWidth);
    var itsY = random(myHeight);
    var eddy = new Mover(itsX, itsY);
    var oldMouseX = 0
    // progress its life animation a bit
    // so they all start in differnt life cycles
    eddy.life += random(300);
    movers.push(eddy);
  }
  frameRate(30);


}
function Mover(xx, yy) {
  this.x = xx;
  this.y = yy;
  this.size = 20 + random(10);
  this.life = 0;
  this.color = color(random(255),random(255),random(255));

  this.update = function () {
    this.life += 0.1;
    this.x += random(4) - 2;
    this.y += random(4) - 2;
    // var mod = random(8);
    mod = this.life % 10;
    fill(60 + mod*2);
    fill(this.color);
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

  checkMouseMove();
  fill(0);
  text('Show @ 10-11-2019',mouseX+5, mouseY+5);
  fill(random(255));

  text('Show @ 10-11-2019',mouseX, mouseY);

}
function touchStarted() {
  mousePressed();
}
function mousePressed() {
  // stuff
  console.log("mouse pressed");
  movers.push(new Mover(mouseX, mouseY));
}

function checkMouseMove() {
  if(oldMouseX != mouseX) {
    movers.push(new Mover(mouseX, mouseY));
    oldMouseX = mouseX;
  }
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
