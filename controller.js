class Controller {
  constructor(numSpiller) {
    // Opretter tomt array til terninger
    this.dice = [];
    //Tilføjer 5 terninger fra Terning klassen til array
    for (let i = 0; i < 5; i++) {
      this.dice[i] = new Terning(25, 25 + 128 * i);
    }

    this.spillere = [];

    for (let i = 0; i < numSpiller; i++) {
      this.spillere.push(new Spiller(450 + 151 + 37 * i, 50));
    }
  }

  UI() {
    //tegn Pointoversigt
    image(pointImg, 450, 50);

    //tegn Bæger
    image(cupImg, 200, 135 * 2, 150, 150);

    //Vis terninger
    for (let i = 0; i < 5; i++) {
      this.dice[i].vis();
    }

    //Vis kolonner til spiller for point
    for (let i = 0; i < this.spillere.length; i++) {
      this.spillere[i].vis();
    }
  }

  rulAlle() {
    for (let i = 0; i < this.dice.length; i++) {
      this.dice[i].slå();
    }
  }

  klickCheck() {
    if (mouseX > 200 && mouseX < 200 + 150 && mouseY > 135 * 2 && mouseY < 135 * 2 + 150) {
      this.rulAlle();
    }
  }
}
