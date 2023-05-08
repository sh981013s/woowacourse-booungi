const { Console } = require("@woowacourse/mission-utils");
const { CASE_RESULT, FINAL_WINNER } = require("../constants/Messages");
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
        )}`,
      );
    }
  },

  printWinner(results) {
    Console.print(`\n${FINAL_WINNER.MESSAGE}${results.join(", ")}`);
  },
};

module.exports = OutputView;
