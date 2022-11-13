const View = require("../view/View");
const UserNumber = require("../model/UserNumber");
const Lotto = require("../model/Lotto");

class Controller {
  constructor() {
    this.view = new View(this);
    this.userNumber = new UserNumber(this);
    this.lotto = new Lotto(this);
  }

  printReadOnlyMessage(type, data) {
    if (type === "userLottoArray") this.view.printUserLottoArray(data);
  }

  throwErrorWithMessage(type) {
    if (type === "purchasingAmountError") this.view.printPurchasingAmountErrorMessage();
    if (type === "winningNumberCommaNumberError") this.view.printWinningNumberCommaNumberErrorMessage();
    if (type === "WinningNumberRangeError") this.view.printWinningNumberRangeErrorMessage();
    if (type === "WinningNumberUniqueError") this.view.printWinningNumberUniqueErrorMessage();
  }

  getPurchasingAmountFromUser() {
    this.view.getPurchasingAmountFromUser();
  }

  setPurchasingAmount(userPurchasingAmount) {
    this.userNumber.setPurchasingAmount(userPurchasingAmount);
  }

  getWinningNumberFromUser() {
    this.view.getWinningNumberFromUser();
  }

  setWinningNumberFromUser(winningNumber) {
    this.lotto.setLottoNumbers(winningNumber);
  }

  init() {
    this.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
