const {
  loadPlaywrightAuthentication
} = require("../authentication/playwright/loadPlaywrightAuthentication");

const {
  authenticate
} = require("../authentication/execution/authenticate");

const {
  discoverEndpoints
} = require("../discovery/execution/discoverEndpoints");

const {
  buildResourceModel
} = require("../resource-model/execution/buildResourceModel");

const {
  executeBolaScenario
} = require("../scenarios/execution/executeBolaScenario");

const configuration = loadPlaywrightAuthentication(
  "examples/playwright/login.yaml"
);

const session = authenticate(
  configuration,
  "user_a"
);

const inventory = discoverEndpoints(session);

const resourceModel = buildResourceModel(inventory);

const observed = executeBolaScenario({
  session,
  resourceModel
});

if (
  observed.data.authenticated !== true ||
  observed.data.foreign_object_requested !== true ||
  observed.data.foreign_object_accessible !== false
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("BOLA SCENARIO VERIFIED");
