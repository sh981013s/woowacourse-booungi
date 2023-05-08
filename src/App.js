const MainController = require("./controller/MainController");

class App {
  play() {
    new MainController().initializeGame();
  }
}

module.exports = App;
