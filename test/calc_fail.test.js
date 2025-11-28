const sum = require('./calc');

test("this test should fail for demo", () => {
  expect(sum(2, 2)).toBe(10); // WRONG ON PURPOSE
});
