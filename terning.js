class Terning {
  constructor(x, y) {
    this.gem = false;
    this.x = x;
    this.y = y;
    this.side = floor(random(1, 7)) - 1;
  }

  slå() {
    if (this.gem == false) {
      this.side = floor(random(1, 7) - 1);
    }
  }

  klikCheck() {
    if (mouseX > this.x && mouseX < this.x + 128 && mouseY > this.y && mouseY < this.y + 128) {
      this.gem = !this.gem;
      //tint(200);
      console.log(this.gem);
    }
  }

  vis() {
    if (this.gem == true) {
      tint(200);
    }
    image(diceImg[this.side], this.x, this.y);
    noTint();
  }
}
