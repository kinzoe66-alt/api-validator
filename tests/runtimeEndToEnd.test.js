const { loadPlaywrightAuthentication } =
require("../authentication/playwright/loadPlaywrightAuthentication");

const { loadScenario } =
require("../scenarios/loaders/loadScenario");

const { loadEvaluationContract } =
require("../kernel/loaders/yaml/loadEvaluationContract");

const { executeRuntime } =
require("../runtime/pipeline/executeRuntime");

const report = executeRuntime({
  authentication: loadPlaywrightAuthentication(
    "examples/playwright/login.yaml"
  ),
  scenario: loadScenario(
    "examples/scenarios/bola.yaml"
  ),
  contract: loadEvaluationContract(
    "kernel/examples/api/bola.contract.yaml"
  )
});

if (report.findings.length !== 1) {
  console.error("FAIL");
  process.exit(1);
}

console.log("END-TO-END RUNTIME VERIFIED");
