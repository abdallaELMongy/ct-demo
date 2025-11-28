function sum(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("Zero is not allowed");
  }
  return a + b;
}

module.exports = sum; // export the function directly
