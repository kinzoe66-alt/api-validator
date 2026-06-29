const { evaluate } = require("../../kernel/kernel");

function evaluateScenario(observedReality, evaluationContract) {
  return evaluate(
    observedReality,
    evaluationContract
  );
}

module.exports = { evaluateScenario };
