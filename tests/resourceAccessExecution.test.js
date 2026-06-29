const { createBrowser } =
require("../playwright/runtime/browserRuntime");

const execute =
require("../scenarios/resource-access/execute");

const scenario =
require("../scenarios/resource-access/scenario");

const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

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

  const plan = scenario.plan(exchange);

  if (plan.length === 0) {
    console.error("FAIL");
    process.exit(1);
  }

  const observed =
    await execute(
      runtime.page,
      exchange,
      plan[0]
    );

  await runtime.browser.close();

  if (!observed.data.request_completed) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log("RESOURCE ACCESS EXECUTION VERIFIED");
})();
