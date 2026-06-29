const {
  buildReplayFinding
} = require("../playwright/network/findings/buildReplayFinding");

const finding = buildReplayFinding({
  scenario: "resource-access",
  evidence: {
    evaluationResult: {
      satisfied: true
    }
  }
});

if (
  !finding.evidence ||
  !finding.evidence.evaluationResult ||
  finding.severity !== "high"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("REPLAY FINDING VERIFIED");
