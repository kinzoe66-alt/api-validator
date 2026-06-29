const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const { login } =
require("../playwright/execution/login");

const {
  loadPlaywrightAuthentication
} = require("../authentication/playwright/loadPlaywrightAuthentication");

const {
  loadScenario
} = require("../scenarios/loaders/loadScenario");

const {
  buildObservation
} = require("../playwright/observation/buildObservation");

const {
  loadEvaluationContract
} = require("../kernel/loaders/yaml/loadEvaluationContract");

const {
  evaluateScenario
} = require("../runtime/kernel/evaluateScenario");

const {
  buildPlaywrightEvidence
} = require("../playwright/evidence/buildPlaywrightEvidence");

(async () => {
  const runtime = await createBrowser();

  const configuration =
    loadPlaywrightAuthentication(
      "examples/playwright/login.yaml"
    );

  await login(runtime, configuration, "user_a");

  const observed =
    await buildObservation(runtime.page);

  const result =
    evaluateScenario(
      observed,
      loadEvaluationContract(
        "kernel/examples/api/bola.contract.yaml"
      )
    );

  const evidence =
    buildPlaywrightEvidence({
      scenario: loadScenario(
        "examples/scenarios/bola.yaml"
      ),
      observedReality: observed,
      evaluationResult: result,
      page: runtime.page
    });

  if (!evidence.evaluationResult) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("PLAYWRIGHT EVIDENCE VERIFIED");
})();
