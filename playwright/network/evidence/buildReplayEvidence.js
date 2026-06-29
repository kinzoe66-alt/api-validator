const {
  buildEvidence
} = require("../../../evidence/builders/buildEvidence");

function buildReplayEvidence({
  scenario,
  observedReality,
  evaluationResult,
  replay,
  response
}) {
  return buildEvidence({
    scenario,
    observedReality,
    evaluationResult,
    replay: {
      method: replay.method,
      url: replay.url
    },
    response: {
      status: response.status
    }
  });
}

module.exports = { buildReplayEvidence };
