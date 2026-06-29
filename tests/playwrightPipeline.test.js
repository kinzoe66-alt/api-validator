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

const {
  buildFinding
} = require("../findings/builders/buildFinding");

const {
  buildReport
} = require("../reporting/builders/buildReport");

(async () => {
  const runtime = await createBrowser();

  const configuration =
    loadPlaywrightAuthentication(
      "examples/playwright/login.yaml"
    );

  await login(runtime, configuration, "user_a");

  const scenario =
    loadScenario(
      "examples/scenarios/bola.yaml"
    );

  const observed =
    await buildObservation(runtime.page);

  const contract =
    loadEvaluationContract(
      "kernel/examples/api/bola.contract.yaml"
    );

  const evaluation =
    evaluateScenario(
      observed,
      contract
    );

  const evidence =
    buildPlaywrightEvidence({
      scenario,
      observedReality: observed,
      evaluationResult: evaluation,
      page: runtime.page
    });

  const finding =
    buildFinding({
      scenario,
      evidence,
      severity: "high"
    });

  const report =
    buildReport([finding]);

  if (
    report.findings.length !== 1 ||
    !report.findings[0].evidence.evaluationResult
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("PLAYWRIGHT PIPELINE VERIFIED");
})();
