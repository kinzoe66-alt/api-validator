const {
  buildReport
} = require("../../../reporting/builders/buildReport");

function buildReplayReport(findings) {
  return buildReport(findings);
}

module.exports = { buildReplayReport };
