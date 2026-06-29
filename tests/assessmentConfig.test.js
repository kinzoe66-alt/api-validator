const {
  loadAssessmentConfig
} = require("../runtime/config/loadAssessmentConfig");

const config =
  loadAssessmentConfig(
    "config/assessment.example.yaml"
  );

if (
  config.assessment.start_url !==
  "https://example.com"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "ASSESSMENT CONFIG VERIFIED"
);
