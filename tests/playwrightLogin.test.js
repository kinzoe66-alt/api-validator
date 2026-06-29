const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const { login } =
require("../playwright/execution/login");

const {
  loadPlaywrightAuthentication
} = require("../authentication/playwright/loadPlaywrightAuthentication");

(async () => {
  const runtime = await createBrowser();

  const configuration =
    loadPlaywrightAuthentication(
      "examples/playwright/login.yaml"
    );

  await login(
    runtime,
    configuration,
    "user_a"
  );

  await runtime.browser.close();

  console.log("PLAYWRIGHT LOGIN PIPELINE VERIFIED");
})();
