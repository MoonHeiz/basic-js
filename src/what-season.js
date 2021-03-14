const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (isNaN(+date)) {
    throw new Error('invalid date');
  }

  const month = date.getMonth();

  switch (true) {
    case month === 11 || month <= 1:
      return 'winter';
    case month <= 4:
      return 'spring';
    case month <= 7:
      return 'summer';
    case month <= 10:
      return 'autumn';
    default:
      throw new Error('invalid date');
  }
};
