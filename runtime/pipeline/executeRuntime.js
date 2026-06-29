const { authenticate } = require("../../authentication/execution/authenticate");
const { discoverEndpoints } = require("../../discovery/execution/discoverEndpoints");
const { buildResourceModel } = require("../../resource-model/execution/buildResourceModel");
const { executeBolaScenario } = require("../../scenarios/execution/executeBolaScenario");
const { evaluateScenario } = require("../kernel/evaluateScenario");
const { buildEvidence } = require("../../evidence/builders/buildEvidence");
const { buildFinding } = require("../../findings/builders/buildFinding");
const { buildReport } = require("../../reporting/builders/buildReport");

function executeRuntime({
  authentication,
  scenario,
  contract
}) {
  const session = authenticate(
    authentication,
    "user_a"
  );

  const inventory = discoverEndpoints(session);

  const resourceModel = buildResourceModel(inventory);

  const observedReality = executeBolaScenario({
    session,
    resourceModel
  });

  const evaluationResult = evaluateScenario(
    observedReality,
    contract
  );

  const evidence = buildEvidence({
    scenario,
    observedReality,
    evaluationResult
  });

  const finding = buildFinding({
    scenario,
    evidence,
    severity: "high"
  });

  return buildReport([finding]);
}

module.exports = { executeRuntime };
