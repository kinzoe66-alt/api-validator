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

const configuration = loadPlaywrightAuthentication(
  "examples/playwright/login.yaml"
);

const session = authenticate(
  configuration,
  "user_a"
);

const inventory = discoverEndpoints(session);

const model = buildResourceModel(inventory);

if (!Array.isArray(model.data.endpoints)) {
  console.error("FAIL");
  process.exit(1);
}

console.log("RESOURCE MODEL PIPELINE VERIFIED");
