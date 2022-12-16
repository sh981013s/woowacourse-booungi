const { Console } = require("@woowacourse/mission-utils");
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

  printCaseResult(currentCarsInformation) {
    OutputView.printCaseResult(currentCarsInformation);
  }

  printResult(results) {
    OutputView.printWinner(results);
  }

  initializeGame() {
    this.readCarNamesInput();
  }

  finishGame() {
    Console.close();
  }
}

module.exports = MainController;
