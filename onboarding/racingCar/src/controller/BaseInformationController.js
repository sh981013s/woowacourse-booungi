const BaseInformationModel = require("../model/BaseInformationModel");
const TryCountValidation = require("../validation/TryCountValidation");
const NameInputValidation = require("../validation/NameInputValidation");

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
      NameInputValidation.validate(carNamesInput);
      this.#baseInformationModel.setCarNames(carNamesInput.split(","));
      this.#mainController.readTryCount();
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
      this.#mainController.readCarNamesInput();
    }
  }

  processTryCountInput(tryCountInput) {
    try {
      TryCountValidation.validate(tryCountInput);
      this.#baseInformationModel.setTryCount(+tryCountInput);
      this.processBaseInformation();
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
      this.#mainController.readTryCount();
    }
  }
}

module.exports = BaseInformationController;
