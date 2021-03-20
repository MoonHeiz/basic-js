const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    const filtered = arr.filter(Array.isArray);
    
    if(filtered.length === 0 ||arr.length === 0) return 1;
    
    depth += Math.max(...filtered.map(el => this.calculateDepth(el)));
    
    return 1 + depth;
  }
};
