const { Console } = require("@woowacourse/mission-utils");
const { CASE_RESULT } = require("../constants/Messages");
const DashMaker = require("../utils/DashMaker");

const OutputView = {
  printError(errorLog) {
    Console.print(errorLog.message);
  },

  printCaseResult(currentCarsInformation) {
    Console.print(CASE_RESULT.MESSAGE);
    for (const singleCarInformation of currentCarsInformation) {
      Console.print(
        `${singleCarInformation.name} : ${DashMaker.getDash(
          singleCarInformation.movement,
        )}\n`,
      );
    }
  },
};

module.exports = OutputView;
