const { Console } = require("@woowacourse/mission-utils");

class OutputView {
  printError(errorLog) {
    Console.print(errorLog.message);
  }
}

module.exports = OutputView;
