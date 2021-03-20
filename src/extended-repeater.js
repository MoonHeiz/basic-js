const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const word = String(str);
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const separator = options.separator ? String(options.separator) : '+';
  const additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';
  const repeatTimes = +options.repeatTimes ? +options.repeatTimes : 1;
  const additionRepeatTimes = +options.additionRepeatTimes ? +options.additionRepeatTimes : 1;

  const innerText = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  const result = `${word}${innerText}${separator}`.repeat(repeatTimes).slice(0, -separator.length);
  return result;
};

