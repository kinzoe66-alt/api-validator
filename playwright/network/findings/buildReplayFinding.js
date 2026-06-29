const {
  buildFinding
} = require("../../../findings/builders/buildFinding");

function buildReplayFinding({
  scenario,
  evidence,
  severity = "high"
}) {
  return buildFinding({
    scenario,
    evidence,
    severity
  });
}

module.exports = { buildReplayFinding };
