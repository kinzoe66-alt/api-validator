const {
  loadEvaluationContract
} = require("../../kernel/loaders/yaml/loadEvaluationContract");

const {
  evaluateScenario
} = require("../../runtime/kernel/evaluateScenario");

const {
  executeMutation
} = require("../mutations/executeMutation");

async function executeScenario(
  context,
  scenario,
  exchange
) {
  const mutations =
    scenario.plan(exchange);

  const findings = [];

  for (const mutation of mutations) {
    const observed =
      await executeMutation(
        context,
        scenario,
        exchange,
        mutation
      );

    const contract =
      loadEvaluationContract(
        scenario.contract
      );

    const evaluation =
      evaluateScenario(
        observed,
        contract
      );

    findings.push({
      mutation,
      evaluation,
      observed
    });
  }

  return findings;
}

module.exports = {
  executeScenario
};
