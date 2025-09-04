let a;
let dice1, dice2, dice3, dice4, dice5, dice6;

function preload() {
  dice1 = loadImage("assets/dice_pixel_1.png");
  dice2 = loadImage("assets/dice_pixel_2.png");
  dice3 = loadImage("assets/dice_pixel_3.png");
  dice4 = loadImage("assets/dice_pixel_4.png");
  dice5 = loadImage("assets/dice_pixel_5.png");
  dice6 = loadImage("assets/dice_pixel_6.png");
}

function setup() {
  createCanvas(400, 400);
  a = new Terning(100, 100);
}

function draw() {
  background(220);
  a.vis();
}
