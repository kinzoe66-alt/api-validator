const {
  evaluateScenario
} = require("../../../runtime/kernel/evaluateScenario");

function evaluateReplay({
  observedReality,
  contract
}) {
  return evaluateScenario(
    observedReality,
    contract
  );
}

module.exports = { evaluateReplay };
