class BaseInformationModel {
  #carNames;
  #tryCount;

  constructor() {
    this.#carNames = [];
    this.#tryCount = null;
  }

  getCarNames() {
    return this.#carNames;
  }

  setCarNames(newCarNames) {
    this.#carNames = newCarNames;
  }

  getTryCount() {
    return this.#tryCount;
  }

  setTryCount(newTryCount) {
    this.#tryCount = newTryCount;
  }
}

module.exports = BaseInformationModel;
