const { loadScenario } = require("../scenarios/loaders/loadScenario");
const { buildObservedReality } = require("../observations/builders/buildObservedReality");
const { loadEvaluationContract } = require("../kernel/loaders/yaml/loadEvaluationContract");
const { evaluateScenario } = require("../runtime/kernel/evaluateScenario");
const { buildEvidence } = require("../evidence/builders/buildEvidence");
const { buildFinding } = require("../findings/builders/buildFinding");
const { buildReport } = require("../reporting/builders/buildReport");

const scenario = loadScenario(
  "examples/scenarios/bola.yaml"
);

const observed = buildObservedReality({
  authenticated: true,
  password_valid: true,
  two_factor_verified: true
});

const contract = loadEvaluationContract(
  "kernel/examples/banking.contract.yaml"
);

const result = evaluateScenario(
  observed,
  contract
);

const evidence = buildEvidence({
  scenario,
  observedReality: observed,
  evaluationResult: result
});

const finding = buildFinding({
  scenario,
  evidence,
  severity: "high"
});

const report = buildReport([finding]);

if (report.findings.length !== 1) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
