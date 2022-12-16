const BaseInformationModel = require("../model/BaseInformationModel");

class BaseInformationController {
  #mainController;
  #baseInformationModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#baseInformationModel = new BaseInformationModel();
  }
}

module.exports = BaseInformationController;
