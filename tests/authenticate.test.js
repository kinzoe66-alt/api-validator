const {
  loadPlaywrightAuthentication
} = require("../authentication/playwright/loadPlaywrightAuthentication");

const {
  authenticate
} = require("../authentication/execution/authenticate");

const configuration = loadPlaywrightAuthentication(
  "examples/playwright/login.yaml"
);

const session = authenticate(
  configuration,
  "user_a"
);

if (
  session.identity !== "user_a"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("AUTHENTICATION PIPELINE VERIFIED");
