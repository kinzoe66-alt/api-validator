const { loadScope } = require("../scope/loaders/loadScope");

const scope = loadScope(
  "examples/scope/hackerone.scope.yaml"
);

if (
  scope.data.targets.length !== 1 ||
  scope.data.authentication.type !== "playwright"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
