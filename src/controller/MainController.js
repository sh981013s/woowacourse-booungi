const BaseInformationController = require("./BaseInformationController");
const RacingGameController = require("./RacingGameController");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class MainController {
  #baseInformationController;
  #racingGameController;

  constructor() {
    this.#baseInformationController = new BaseInformationController(this);
    this.#racingGameController = new RacingGameController(this);
  }

  generateCars(carNames, tryCount) {
    this.#racingGameController.generateCars(carNames, tryCount);
  }

  processCarNamesInput(carNamesInput) {
    this.#baseInformationController.processCarNamesInput(carNamesInput);
  }

  processTryCountInput(tryCountInput) {
    this.#baseInformationController.processTryCountInput(tryCountInput);
  }

  readCarNamesInput() {
    InputView.readCarNamesInput(this.processCarNamesInput.bind(this));
  }

  readTryCount() {
    InputView.readTryCount(this.processTryCountInput.bind(this));
  }

  printError(errorLog) {
    OutputView.printError(errorLog);
  }

  initializeGame() {
    this.readCarNamesInput();
  }
}

module.exports = MainController;
