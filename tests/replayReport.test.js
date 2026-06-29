const {
  buildReplayReport
} = require("../playwright/network/reporting/buildReplayReport");

const {
  buildReplayFinding
} = require("../playwright/network/findings/buildReplayFinding");

const report = buildReplayReport([
  buildReplayFinding({
    scenario: "resource-access",
    evidence: {
      evaluationResult: {
        satisfied: true
      }
    }
  })
]);

if (
  report.findings.length !== 1 ||
  !report.findings[0].evidence.evaluationResult
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("REPLAY REPORT VERIFIED");
