const {
  evaluateInventory
} = require("../../playwright/network/runtime/evaluateInventory");

const {
  buildReplayReport
} = require("../../playwright/network/reporting/buildReplayReport");

const {
  buildReplayFinding
} = require("../../playwright/network/findings/buildReplayFinding");

const {
  buildReplayEvidence
} = require("../../playwright/network/evidence/buildReplayEvidence");

const {
  buildReplayObservation
} = require("../../playwright/network/observations/buildReplayObservation");

function evaluateCapturedSession(exchangeInventory) {
  const evaluations =
    evaluateInventory(exchangeInventory);

  const findings = [];

  for (const result of evaluations) {
    const observed =
      buildReplayObservation({
        replay: {
          method: result.exchange.request.method,
          url: result.exchange.request.url
        },
        response: result.exchange.response
      });

    const evidence =
      buildReplayEvidence({
        scenario: "resource-access",
        observedReality: observed,
        evaluationResult: result.evaluation,
        replay: result.exchange.request,
        response: result.exchange.response
      });

    findings.push(
      buildReplayFinding({
        scenario: "resource-access",
        evidence
      })
    );
  }

  return buildReplayReport(findings);
}

module.exports = {
  evaluateCapturedSession
};
