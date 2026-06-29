const { buildObservedReality } =
require("../observations/builders/buildObservedReality");

const {
  loadEvaluationContract
} = require("../kernel/loaders/yaml/loadEvaluationContract");

const {
  evaluateScenario
} = require("../runtime/kernel/evaluateScenario");

const observed =
  buildObservedReality({
    authenticated: true,
    request_completed: true,
    authorization_enforced: true
  });

const contract =
  loadEvaluationContract(
    "contracts/api/resource-access.contract.yaml"
  );

const result =
  evaluateScenario(
    observed,
    contract
  );

if (!result.satisfied) {
  console.error("FAIL");
  process.exit(1);
}

console.log("SCENARIO EVALUATION VERIFIED");
