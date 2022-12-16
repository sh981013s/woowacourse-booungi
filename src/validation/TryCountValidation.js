const IsPositiveInteger = require("../utils/IsPositiveInteger");
const { TRY_COUNT } = require("../constants/Messages");

class TryCountValidation {
  static validate(tryCountInput) {
    if (!IsPositiveInteger.validate(tryCountInput)) {
      throw new Error(TRY_COUNT.ERROR);
    }
  }
}

module.exports = TryCountValidation;
