const { Random } = require("@woowacourse/mission-utils");

class IsPossibleToMove {
  static isPossible() {
    return Random.pickNumberInRange(0, 9) > 3;
  }
}

module.exports = IsPossibleToMove;
