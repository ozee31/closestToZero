module.exports = input => {
  if (!Array.isArray(input)) {
    throw new TypeError("Input must be an array");
  }

  return input
    .filter(value => typeof value === "number")
    .reduce((closestToZero, currentNumber) => {
      if (!closestToZero) {
        return currentNumber;
      }

      closestToZeroAbs = Math.abs(closestToZero);
      currentNumberAbs = Math.abs(currentNumber);

      if (currentNumberAbs === closestToZeroAbs) {
        return Math.sign(currentNumber) === 1 ? currentNumber : closestToZero;
      }

      return currentNumberAbs < closestToZeroAbs
        ? currentNumber
        : closestToZero;
    });
};
