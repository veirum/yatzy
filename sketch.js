let yatzy;
let diceImg = [];
let cupImg;
let pointImg;
let kolonneImg;

function preload() {
  diceImg[0] = loadImage("assets/dice_pixel_1.png");
  diceImg[1] = loadImage("assets/dice_pixel_2.png");
  diceImg[2] = loadImage("assets/dice_pixel_3.png");
  diceImg[3] = loadImage("assets/dice_pixel_4.png");
  diceImg[4] = loadImage("assets/dice_pixel_5.png");
  diceImg[5] = loadImage("assets/dice_pixel_6.png");
  cupImg = loadImage("assets/cup.png");
  pointImg = loadImage("assets/oversigt.jpg");
  kolonneImg = loadImage("assets/kolonne.jpg");
}

function setup() {
  createCanvas(800, 700);
  yatzy = new Controller(1);
}

function draw() {
  background(255);
  yatzy.UI();
}

function mouseClicked() {
  for (let i = 0; i < 5; i++) {
    yatzy.dice[i].klikCheck();
  }
  yatzy.klickCheck();
  console.log(yatzy);
}
