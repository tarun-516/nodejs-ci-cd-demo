const add = require("./app");
const assert = require("assert");

assert.strictEqual(add(10, 20), 30);
assert.strictEqual(add(5, 0), 5);

console.log("All tests passed!");