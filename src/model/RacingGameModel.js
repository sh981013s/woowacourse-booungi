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
}

module.exports = RacingGameModel;
