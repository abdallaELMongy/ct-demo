function sum(a, b) {
  // Validation: do not accept zero values
  if (a === 0 || b === 0) {
    throw new Error('Inputs must be non-zero');
  }
  return a + b;
}

module.exports = { sum };
