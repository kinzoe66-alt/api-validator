const { buildEvidence } =
require("../../evidence/builders/buildEvidence");

function buildPlaywrightEvidence({
  scenario,
  observedReality,
  evaluationResult,
  page
}) {
  return buildEvidence({
    scenario,
    observedReality,
    evaluationResult,
    page: {
      url: page.url(),
      title: observedReality.data.title
    }
  });
}

module.exports = { buildPlaywrightEvidence };
