const fs = require("fs");
const YAML = require("yaml");

function loadAssessmentConfig(path) {
  return YAML.parse(
    fs.readFileSync(path, "utf8")
  );
}

module.exports = {
  loadAssessmentConfig
};
