const { Console } = require("@woowacourse/mission-utils");
const { CAR_NAME } = require("../constants/Messages");

const InputView = {
  readCarNamesInput(callbackFunction) {
    Console.readLines(CAR_NAME.INPUT, (carNamesInput) => {
      callbackFunction(carNamesInput);
    });
  },
};

module.exports = InputView;
