const RacingGameModel = require("../model/RacingGameModel");

class RacingGameController {
  #mainController;
  #racingGameModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#racingGameModel = new RacingGameModel();
  }
}

module.exports = RacingGameController;
