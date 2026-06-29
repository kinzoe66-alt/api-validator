const catalog = {
  "resource-access":
    require("../../scenarios/resource-access/scenario")
};

function loadScenario(name) {
  const scenario = catalog[name];

  if (!scenario) {
    throw new Error(
      `Unknown scenario: ${name}`
    );
  }

  return scenario;
}

module.exports = {
  loadScenario
};
