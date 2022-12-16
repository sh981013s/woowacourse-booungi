const BaseInformationController = require("./BaseInformationController");
const RacingGameController = require("./RacingGameController");

class MainController {
  #baseInformationController;
  #racingGameController;

  constructor() {
    this.#baseInformationController = new BaseInformationController(this);
    this.#racingGameController = new RacingGameController(this);
  }
}

module.exports = MainController;
