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

  getCarsInformation() {
    const carsInformation = [];
    for (const singleCar of this.#cars) {
      carsInformation.push(singleCar.getCarInformation());
    }
    return carsInformation;
  }

  getHighestScore() {
    const totalMovements = [];
    for (const singleCar of this.#cars) {
      totalMovements.push(singleCar.getCarInformation().movement);
    }

    return Math.max(...totalMovements);
  }

  getWinnerNames(winners) {
    const winnerNames = [];

    for (const singleWinner of winners) {
      winnerNames.push(singleWinner.getCarInformation().name);
    }

    return winnerNames;
  }

  getWinner() {
    const winners = this.#cars.filter(
      (carInformation) =>
        carInformation.getCarInformation().movement === this.getHighestScore(),
    );

    return this.getWinnerNames(winners);
  }

  getResults() {
    return this.getWinner();
  }
}

module.exports = RacingGameModel;
