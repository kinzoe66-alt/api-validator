const {
  buildReplayObservation
} = require("../playwright/network/observations/buildReplayObservation");

const {
  loadEvaluationContract
} = require("../kernel/loaders/yaml/loadEvaluationContract");

const {
  evaluateReplay
} = require("../playwright/network/evaluation/evaluateReplay");

const {
  buildReplayEvidence
} = require("../playwright/network/evidence/buildReplayEvidence");

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

const evaluation = evaluateReplay({
  observedReality: observed,
  contract
});

const evidence = buildReplayEvidence({
  scenario: "resource-access",
  observedReality: observed,
  evaluationResult: evaluation,
  replay: {
    method: "GET",
    url: "https://example.com/api/users/124"
  },
  response: {
    status: 403
  }
});

if (!evidence.evaluationResult) {
  console.error("FAIL");
  process.exit(1);
}

console.log("REPLAY EVIDENCE VERIFIED");
