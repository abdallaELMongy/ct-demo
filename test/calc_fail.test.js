const sum = require('../calc');

console.log("Running failing test...");
if (sum(2, 2) !== 10) {
  throw new Error("Failing test triggered for demo!");
}
