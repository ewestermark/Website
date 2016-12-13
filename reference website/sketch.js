var bg;

function setup() {

  cnv = createCanvas(600, 800);
  cnv.parent('canvasDiv');
  bg = loadImage("blue.jpg");
}

function draw(){
    background(bg);
}
