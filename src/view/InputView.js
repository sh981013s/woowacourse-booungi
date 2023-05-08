const { Console } = require("@woowacourse/mission-utils");
const { CAR_NAME,
  TRY_COUNT } = require("../constants/Messages");

const InputView = {
  readCarNamesInput(callbackFunction) {
    Console.readLine(CAR_NAME.INPUT, (carNamesInput) => {
      callbackFunction(carNamesInput);
    });
  },

  readTryCount(callbackFunction) {
    Console.readLine(TRY_COUNT.INPUT, (tryCountInput) => {
      callbackFunction(tryCountInput);
    });
  },
};

module.exports = InputView;
