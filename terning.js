class Terning {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.side = floor(random(1, 7));
  }

  slå() {
    this.side = floor(random(1, 7));
  }

  vis() {
    image(dice1, this.x, this.y);
  }
}
