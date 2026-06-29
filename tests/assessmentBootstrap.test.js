const {
  loadAssessmentConfig
} = require("../runtime/config/loadAssessmentConfig");

const {
  loadConfiguredScenarios
} = require("../runtime/scenarios/loadConfiguredScenarios");

const {
  buildAssessmentContext
} = require("../runtime/context/buildAssessmentContext");

const config =
  loadAssessmentConfig(
    "config/assessment.example.yaml"
  );

const context =
  buildAssessmentContext({
    session: {},
    scope: [],
    inventory: {}
  });

const scenarios =
  loadConfiguredScenarios(config);

if (
  !context ||
  scenarios.length !== 1
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "ASSESSMENT BOOTSTRAP VERIFIED"
);
