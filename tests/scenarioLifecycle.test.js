const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  runScenarios
} = require("../runtime/scenarios/runScenarios");

(async () => {
  const runtime =
    await createBrowser();

  await runtime.page.goto("https://example.com");

  const exchange =
    buildHttpExchange({
      request: {
        method: "GET",
        url: "https://example.com/api/users/123",
        headers: {}
      },
      response: {
        status: 200
      }
    });

  const findings =
    await runScenarios(
      runtime.page,
      exchange
    );

  await runtime.browser.close();

  if (
    findings.length !== 1 ||
    !findings[0].evaluation.satisfied
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log("SCENARIO LIFECYCLE VERIFIED");
})();
