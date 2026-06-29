const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  runScenarios
} = require("../runtime/scenarios/runScenarios");

(async () => {
  const exchange = buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/users/123"
    },
    response: {
      status: 200
    }
  });

  const scenarios =
    await runScenarios(exchange);

  if (
    scenarios.length !== 1 ||
    scenarios[0].plan.length !== 1
  ) {
    console.error("FAIL");
    process.exit(1);
  }

  console.log("SCENARIO MANAGER VERIFIED");
})();
