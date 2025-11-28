const fs = require("fs");
const path = require("path");

// Path to the test folder (relative to test-runner.js)
const testDir = path.join(__dirname, "test");

// Read all files in the test folder
fs.readdirSync(testDir).forEach((file) => {
  if (file.endsWith(".test.js")) {
    const filePath = path.join(testDir, file);
    console.log("Running:", file);
    require(filePath);  // Correct absolute path
  }
});
