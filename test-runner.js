const fs = require("fs");
const path = require("path");

// Folder where your tests exist (change if needed)
const testDir = "./test";

fs.readdirSync(testDir).forEach((file) => {
  if (file.endsWith(".test.js")) {
    console.log("Running:", file);
    require(path.join(testDir, file));
  }
});
