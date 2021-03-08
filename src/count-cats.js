const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;

  matrix.forEach(subArray =>
    subArray.forEach(element => (element === '^^' ? result++ : result))
  );

  return result;
};
