const test = require("node:test");
const assert = require("node:assert/strict");

test("configuration uses the expected values", () => {
  const config = require("../src/config");

  assert.equal(config.port, 3000);
  assert.equal(config.logLevel, "info");
});

