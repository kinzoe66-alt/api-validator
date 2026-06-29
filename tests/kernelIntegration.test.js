const { loadEvaluationContract } = require("../kernel/loaders/yaml/loadEvaluationContract");
const { buildObservedReality } = require("../observations/builders/buildObservedReality");
const { evaluateScenario } = require("../runtime/kernel/evaluateScenario");

const contract = loadEvaluationContract(
  "kernel/examples/banking.contract.yaml"
);

const observed = buildObservedReality({
  authenticated: true,
  password_valid: true,
  two_factor_verified: true
});

const result = evaluateScenario(
  observed,
  contract
);

if (!result.satisfied) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
