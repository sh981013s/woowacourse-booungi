const IsPossibleToMove = require("../utils/IsPossibleToMove");

class Car {
  #name;
  #movement;

  constructor(name) {
    this.#name = name;
    this.#movement = 0;
  }

  getCarInformation() {
    return { name: this.#name, movement: this.#movement };
  }

  tryMove() {
    if (IsPossibleToMove.isPossible()) this.#movement++;
  }
}

module.exports = Car;
