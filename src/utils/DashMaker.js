const { CASE_RESULT } = require("../constants/Messages");

class DashMaker {
  static getDash(movementCount) {
    let dashString = "";
    for (let i = 0; i < movementCount; i++) {
      dashString += CASE_RESULT.SINGLE_MOVE;
    }
    return dashString;
  }
}

module.exports = DashMaker;
