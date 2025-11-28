const assert = require('assert');
const { sum } = require('../index');

try {
  // 1) Normal addition
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');

  // 2) Another normal case (including negative)
  assert.strictEqual(sum(-1, 1), 0, '-1 + 1 should equal 0');

  // 3) Zero inputs should throw with a specific message
  let threw = false;
  try {
    sum(0, 5);
  } catch (e) {
    threw = true;
    assert.strictEqual(e.message, 'Inputs must be non-zero', 'Wrong error message for sum(0,5)');
  }
  if (!threw) throw new Error('Expected sum(0,5) to throw');

  threw = false;
  try {
    sum(4, 0);
  } catch (e) {
    threw = true;
    assert.strictEqual(e.message, 'Inputs must be non-zero', 'Wrong error message for sum(4,0)');
  }
  if (!threw) throw new Error('Expected sum(4,0) to throw');

  console.log('All tests passed');
  process.exit(0);
} catch (err) {
  console.error('Test failed:', err.message);
  process.exit(1);
}
