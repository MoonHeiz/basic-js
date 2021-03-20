const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`~~( ${value !== '' ? value : ' '} )`);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error('INVALID POSITION');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('').slice(2);
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
