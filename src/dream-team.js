const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const result = [];

  for (let element of members) {
    if (typeof element === 'string') {
      const found = element
        .split('')
        .find(element => /[a-z]/i.test(element[0]));
      if (found) result.push(found.toUpperCase());
    }
  }

  return result.sort().join('');
};
