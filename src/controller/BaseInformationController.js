const BaseInformationModel = require("../model/BaseInformationModel");
const { validate } = require("../validation/NameInputValidation");

class BaseInformationController {
  #mainController;
  #baseInformationModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#baseInformationModel = new BaseInformationModel();
  }

  processBaseInformation() {
    this.#mainController.generateCars(
      this.#baseInformationModel.getCarNames(),
      this.#baseInformationModel.getTryCount(),
    );
  }

  processCarNamesInput(carNamesInput) {
    try {
      validate(carNamesInput);
      this.#baseInformationModel.setCarNames(carNamesInput.split(","));
      this.#mainController.readTryCount();
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
    }
  }

  processTryCountInput(tryCountInput) {
    try {
      validate(tryCountInput);
      this.#baseInformationModel.setTryCount(+tryCountInput);
      this.processBaseInformation();
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
    }
  }
}

module.exports = BaseInformationController;
