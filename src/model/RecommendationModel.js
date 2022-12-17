const Coach = require("./Coach");

class RecommendationModel {
  #coaches;
  constructor() {
    this.#coaches = [];
  }

  generateCoach(name, hateFood) {
    this.#coaches.push(new Coach(name, hateFood));
  }

  generateRecommendations(categories) {
    for (const singleCategory of categories) {
      for (const singleCoach of this.#coaches) {
        singleCoach.generateRecommendedFood(singleCategory);
      }
    }
  }

  getOverallCoachInformation() {
    const overallInformation = [];
    for (const singleCoach of this.#coaches) {
      overallInformation.push(singleCoach.getCoachInformation());
    }

    return overallInformation;
  }
}

module.exports = RecommendationModel;
