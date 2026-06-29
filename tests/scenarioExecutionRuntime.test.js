const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const scenario =
require("../scenarios/resource-access/scenario");

const {
  executeScenario
} = require("../runtime/scenarios/executeScenario");

const exchange =
  buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/users/123"
    },
    response: {
      status: 403
    }
  });

const findings =
  executeScenario(
    scenario,
    exchange
  );

if (
  findings.length !== 1 ||
  !findings[0].evaluation.satisfied
) {
  console.error("FAIL");
  process.exit(1);
}

console.log(
  "SCENARIO EXECUTION VERIFIED"
);
