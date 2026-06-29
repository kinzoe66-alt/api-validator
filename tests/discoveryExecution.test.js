const {
  loadPlaywrightAuthentication
} = require("../authentication/playwright/loadPlaywrightAuthentication");

const {
  authenticate
} = require("../authentication/execution/authenticate");

const {
  discoverEndpoints
} = require("../discovery/execution/discoverEndpoints");

const configuration = loadPlaywrightAuthentication(
  "examples/playwright/login.yaml"
);

const session = authenticate(
  configuration,
  "user_a"
);

const inventory = discoverEndpoints(session);

if (!Array.isArray(inventory.endpoints)) {
  console.error("FAIL");
  process.exit(1);
}

console.log("DISCOVERY PIPELINE VERIFIED");
