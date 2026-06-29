const {
  buildReplayObservation
} = require("../playwright/network/observations/buildReplayObservation");

const {
  loadEvaluationContract
} = require("../kernel/loaders/yaml/loadEvaluationContract");

const {
  evaluateReplay
} = require("../playwright/network/evaluation/evaluateReplay");

const observed = buildReplayObservation({
  replay: {
    method: "GET",
    url: "https://example.com/api/users/124"
  },
  response: {
    status: 403
  }
});

const contract = loadEvaluationContract(
  "contracts/api/resource-access.contract.yaml"
);

const result = evaluateReplay({
  observedReality: observed,
  contract
});

if (!result.satisfied) {
  console.error("FAIL");
  process.exit(1);
}

console.log("REPLAY EVALUATION VERIFIED");
