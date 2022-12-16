const Car = require("./Car");

class RacingGameModel {
  #cars;

  constructor() {
    this.#cars = [];
  }

  generateCars(carNames) {
    for (const singleCarName of carNames) {
      this.#cars.push(new Car(singleCarName));
    }
  }

  calculateCase() {
    for (let i = 0; i < this.#cars.length; i++) {
      this.#cars[i].tryMove();
    }
  }
}

module.exports = RacingGameModel;
