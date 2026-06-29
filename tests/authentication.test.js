const { loadAuthentication } = require("../authentication/loaders/loadAuthentication");

const auth = loadAuthentication(
  "examples/authentication/playwright.authentication.yaml"
);

if (
  auth.data.provider !== "playwright" ||
  auth.data.identities.length !== 2
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("PASS");
