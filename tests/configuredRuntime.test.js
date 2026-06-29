const {
  loadAssessmentConfig
} = require("../runtime/config/loadAssessmentConfig");

const {
  loadConfiguredScenarios
} = require("../runtime/scenarios/loadConfiguredScenarios");

const config =
  loadAssessmentConfig(
    "config/assessment.example.yaml"
  );

const scenarios =
  loadConfiguredScenarios(config);

if (
  scenarios.length !== config.scenarios.length
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "CONFIGURED RUNTIME VERIFIED"
);
