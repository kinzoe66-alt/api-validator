const fs = require("fs");
const YAML = require("yaml");
const { Scenario } = require("../model/scenario");

function loadScenario(path) {
  return new Scenario(
    YAML.parse(fs.readFileSync(path, "utf8"))
  );
}

module.exports = { loadScenario };
