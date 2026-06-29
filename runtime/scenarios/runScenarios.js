const scenarios =
require("../../scenarios");

const {
  executeScenario
} = require("./executeScenario");

async function runScenarios(
  context
) {
  const findings = [];

  for (const exchange of context.inventory.exchanges) {
    for (const scenario of scenarios) {
      if (!scenario.applies(exchange)) {
        continue;
      }

      const results =
        await executeScenario(
          context,
          scenario,
          exchange
        );

      findings.push(...results);
    }
  }

  return findings;
}

module.exports = {
  runScenarios
};
