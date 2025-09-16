class Spiller {
  constructor(x, y) {
    this.point = [];
    this.x = x;
    this.y = y;
    for (let i = 0; i < 15; i++) {
      this.point.push(0);
    }
  }

  vis() {
    image(kolonneImg, this.x, this.y);
  }
}
