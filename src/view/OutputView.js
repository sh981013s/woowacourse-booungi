const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printError(errorLog) {
    Console.print(errorLog.message);
  },
};

module.exports = OutputView;
