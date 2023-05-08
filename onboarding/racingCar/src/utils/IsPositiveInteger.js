class IsPositiveInteger {
  static validate(input) {
    if (typeof input !== "string") {
      return false;
    }
    const num = Number(input);
    return Number.isInteger(num) && num > 0;
  }
}

module.exports = IsPositiveInteger;
