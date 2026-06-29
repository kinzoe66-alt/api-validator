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

const {
  buildReplayFinding
} = require("../playwright/network/findings/buildReplayFinding");

const {
  buildReplayReport
} = require("../playwright/network/reporting/buildReplayReport");

const observed = buildReplayObservation({
  replay: {
    method: "GET",
    url: "https://example.com/api/users/124"
  },
  response: {
    status: 403
  }
});

const evaluation = evaluateReplay({
  observedReality: observed,
  contract: loadEvaluationContract(
    "contracts/api/resource-access.contract.yaml"
  )
});

const evidence = buildReplayEvidence({
  scenario: "resource-access",
  observedReality: observed,
  evaluationResult: evaluation,
  replay: {
    method: "GET",
    url: observed.data.url
  },
  response: {
    status: observed.data.status
  }
});

const finding = buildReplayFinding({
  scenario: "resource-access",
  evidence
});

const report = buildReplayReport([
  finding
]);

if (
  report.findings.length !== 1 ||
  !report.findings[0].evidence.evaluationResult.satisfied
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("REPLAY PIPELINE VERIFIED");
