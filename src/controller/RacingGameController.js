const RacingGameModel = require("../model/RacingGameModel");

class RacingGameController {
  #mainController;
  #racingGameModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#racingGameModel = new RacingGameModel();
  }

  calculateCase() {
    this.#racingGameModel.calculateCase();
    this.#mainController.printCaseResult(this.#racingGameModel.getCarsInformation());
  }

  getResults() {}

  generateCars(carNames, tryCount) {
    this.#racingGameModel.generateCars(carNames);
    for (let i = 0; i < tryCount; i++) {
      this.calculateCase();
    }
    this.getResults();
  }
}

module.exports = RacingGameController;
