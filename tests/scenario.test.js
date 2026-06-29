const { loadScenario } = require("../scenarios/loaders/loadScenario");

const scenario = loadScenario(
  "examples/scenarios/bola.yaml"
);

if (
  scenario.data.id !== "bola" ||
  scenario.data.steps.length !== 4
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
