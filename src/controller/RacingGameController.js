const RacingGameModel = require("../model/RacingGameModel");

class RacingGameController {
  #mainController;
  #racingGameModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#racingGameModel = new RacingGameModel();
  }

  calculateCase() {}

  generateCars(carNames) {
    this.#racingGameModel.generateCars(carNames);
    this.calculateCase();
  }
}

module.exports = RacingGameController;
