const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('INVALID ARGUMENTS');

    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        result += message[i];
        continue;
      }

      if (j >= key.length) j = 0;

      const value = this.alphabet.indexOf(message[i].toUpperCase());
      const keyValue = this.alphabet.indexOf(key[j++].toUpperCase());
      result += this.alphabet[(value + keyValue) % 26];
    }

    return this.modification ? result : result.split('').reverse('').join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('INVALID ARGUMENTS');

    let result = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(encryptedMessage[i])) {
        result += encryptedMessage[i];
        continue;
      }

      if (j >= key.length) j = 0;

      const value = this.alphabet.indexOf(encryptedMessage[i]);
      const keyValue = this.alphabet.indexOf(key[j++].toUpperCase());
      result += this.alphabet[(value - keyValue + 26) % 26];
    }
    return this.modification ? result : result.split('').reverse('').join('');
  }
}

module.exports = VigenereCipheringMachine;
