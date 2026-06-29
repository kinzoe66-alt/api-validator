const { loadScope } = require("../scope/loaders/loadScope");
const { loadAuthentication } = require("../authentication/loaders/loadAuthentication");
const { loadDiscovery } = require("../discovery/loaders/loadDiscovery");
const { loadResourceModel } = require("../resource-model/loaders/loadResourceModel");
const { loadScenario } = require("../scenarios/loaders/loadScenario");
const { buildRuntimeContext } = require("../runtime/builders/buildRuntimeContext");
const { executeScenario } = require("../runtime/execution/executeScenario");

const context = buildRuntimeContext({
  scope: loadScope("examples/scope/hackerone.scope.yaml"),
  authentication: loadAuthentication("examples/authentication/playwright.authentication.yaml"),
  discovery: loadDiscovery("examples/discovery/discovery.yaml"),
  resourceModel: loadResourceModel("examples/resources/resources.yaml"),
  scenario: loadScenario("examples/scenarios/bola.yaml"),
  observedReality: null
});

const observed = executeScenario(context);

if (
  observed.data.authenticated !== true ||
  observed.data.foreign_object_requested !== true
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
