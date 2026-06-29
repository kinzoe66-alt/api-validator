const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const { login } =
require("../playwright/execution/login");

const {
  loadPlaywrightAuthentication
} = require("../authentication/playwright/loadPlaywrightAuthentication");

const {
  buildObservation
} = require("../playwright/observation/buildObservation");

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

  const observed =
    await buildObservation(runtime.page);

  if (
    observed.data.authenticated !== true ||
    !observed.data.url
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  await runtime.browser.close();

  console.log("PLAYWRIGHT OBSERVATION VERIFIED");
})();
