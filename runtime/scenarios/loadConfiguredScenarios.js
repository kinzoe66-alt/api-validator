const {
  loadScenario
} = require("./catalog");

function loadConfiguredScenarios(config) {
  return config.scenarios.map(
    loadScenario
  );
}

module.exports = {
  loadConfiguredScenarios
};
