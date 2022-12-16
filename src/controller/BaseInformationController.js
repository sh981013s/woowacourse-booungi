const BaseInformationModel = require("../model/BaseInformationModel");
const { validate } = require("../validation/NameInputValidation");

class BaseInformationController {
  #mainController;
  #baseInformationModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#baseInformationModel = new BaseInformationModel();
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
}

module.exports = BaseInformationController;
