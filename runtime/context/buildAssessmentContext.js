const {
  AssessmentContext
} = require("./assessmentContext");

function buildAssessmentContext({
  session,
  scope,
  inventory
}) {
  return new AssessmentContext({
    session,
    scope,
    inventory
  });
}

module.exports = {
  buildAssessmentContext
};
