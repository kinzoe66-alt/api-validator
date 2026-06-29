const {
  loadPlaywrightAuthentication
} = require("../authentication/playwright/loadPlaywrightAuthentication");

const configuration = loadPlaywrightAuthentication(
  "examples/playwright/login.yaml"
);

if (
  configuration.configuration.base_url !== "https://api.example.com" ||
  configuration.configuration.login.url !== "/login"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PLAYWRIGHT CONFIG VERIFIED");
