const { loadScope } = require("../scope/loaders/loadScope");
const { loadAuthentication } = require("../authentication/loaders/loadAuthentication");
const { loadDiscovery } = require("../discovery/loaders/loadDiscovery");
const { loadResourceModel } = require("../resource-model/loaders/loadResourceModel");
const { loadScenario } = require("../scenarios/loaders/loadScenario");

const { buildRuntimeContext } = require("../runtime/builders/buildRuntimeContext");
const { executeScenario } = require("../runtime/execution/executeScenario");

const { loadEvaluationContract } = require("../kernel/loaders/yaml/loadEvaluationContract");
const { evaluateScenario } = require("../runtime/kernel/evaluateScenario");

const { buildEvidence } = require("../evidence/builders/buildEvidence");
const { buildFinding } = require("../findings/builders/buildFinding");
const { buildReport } = require("../reporting/builders/buildReport");

const context = buildRuntimeContext({
  scope: loadScope("examples/scope/hackerone.scope.yaml"),
  authentication: loadAuthentication("examples/authentication/playwright.authentication.yaml"),
  discovery: loadDiscovery("examples/discovery/discovery.yaml"),
  resourceModel: loadResourceModel("examples/resources/resources.yaml"),
  scenario: loadScenario("examples/scenarios/bola.yaml"),
  observedReality: null
});

const observed = executeScenario(context);

const contract = loadEvaluationContract(
  "kernel/examples/api/bola.contract.yaml"
);

const evaluation = evaluateScenario(
  observed,
  contract
);

const evidence = buildEvidence({
  scenario: context.scenario,
  observedReality: observed,
  evaluationResult: evaluation
});

const finding = buildFinding({
  scenario: context.scenario,
  evidence,
  severity: "high"
});

const report = buildReport([finding]);

if (
  report.findings.length !== 1 ||
  report.findings[0].evidence.evaluationResult.satisfied !== true
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("RUNTIME PIPELINE VERIFIED");
