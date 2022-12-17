class Coach {
  #name;
  #hateFood;
  #recommendedFood;

  constructor(name, hateFood) {
    this.#name = name;
    this.#hateFood = hateFood;
    this.#recommendedFood = [];
  }

  generateRecommendedFood() {}

  getCoachInformation() {
    return {
      name: this.#name,
      hateFood: this.#hateFood,
      recommendedFood: this.#recommendedFood,
    };
  }
}

module.exports = Coach;
