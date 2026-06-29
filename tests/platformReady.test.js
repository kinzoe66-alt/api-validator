const {
  loadAssessmentConfig
} = require("../runtime/config/loadAssessmentConfig");

const {
  buildAssessmentContext
} = require("../runtime/context/buildAssessmentContext");

const {
  loadConfiguredScenarios
} = require("../runtime/scenarios/loadConfiguredScenarios");

const config =
  loadAssessmentConfig(
    "config/assessment.example.yaml"
  );

const context =
  buildAssessmentContext({
    session: {},
    scope: [],
    inventory: {
      exchanges: []
    }
  });

const scenarios =
  loadConfiguredScenarios(config);

if (
  !config ||
  !context ||
  scenarios.length === 0
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "PLATFORM READY"
);
