const {
  applyMutation
} = require("../playwright/network/execution/applyMutation");

if (
  applyMutation("123","increment") !== "124" ||
  applyMutation("123","decrement") !== "122" ||
  applyMutation("123","zero") !== "0" ||
  applyMutation("123","negative") !== "-1" ||
  applyMutation("123","random") !== "999999999"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("MUTATION EXECUTION VERIFIED");
