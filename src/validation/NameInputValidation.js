const { CAR_NAME } = require("../constants/Messages");

class NameInputValidation {
  static validate(carNameInput) {
    const splitCarNameInput = carNameInput.split(",");
    for (const singleCarName of splitCarNameInput) {
      if (!singleCarName || singleCarName.length > 5) {
        throw new Error(CAR_NAME.ERROR);
      }
    }
  }
}

module.exports = NameInputValidation;
