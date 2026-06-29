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
    inventory: {
      exchanges: []
    }
  });

const scenarios =
  loadConfiguredScenarios(config);

if (
  config.scenarios.length !== scenarios.length ||
  !context.session ||
  !context.scope ||
  !context.inventory
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "PLATFORM BOOTSTRAP VERIFIED"
);
