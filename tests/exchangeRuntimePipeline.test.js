const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  evaluateExchange
} = require("../playwright/network/runtime/evaluateExchange");

const {
  buildReplayObservation
} = require("../playwright/network/observations/buildReplayObservation");

const {
  buildReplayEvidence
} = require("../playwright/network/evidence/buildReplayEvidence");

const {
  buildReplayFinding
} = require("../playwright/network/findings/buildReplayFinding");

const {
  buildReplayReport
} = require("../playwright/network/reporting/buildReplayReport");

const exchange = buildHttpExchange({
  request: {
    method: "GET",
    url: "https://example.com/api/users/123"
  },
  response: {
    status: 403
  }
});

const evaluation =
  evaluateExchange(exchange);

const observed =
  buildReplayObservation({
    replay: {
      method: exchange.request.method,
      url: exchange.request.url
    },
    response: exchange.response
  });

const evidence =
  buildReplayEvidence({
    scenario: "resource-access",
    observedReality: observed,
    evaluationResult: evaluation,
    replay: exchange.request,
    response: exchange.response
  });

const finding =
  buildReplayFinding({
    scenario: "resource-access",
    evidence
  });

const report =
  buildReplayReport([finding]);

if (
  report.findings.length !== 1 ||
  !report.findings[0].evidence.evaluationResult.satisfied
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("EXCHANGE RUNTIME PIPELINE VERIFIED");
