const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  buildExchangeInventory
} = require("../playwright/network/inventory/buildExchangeInventory");

const {
  evaluateCapturedSession
} = require("../runtime/orchestrators/evaluateCapturedSession");

const inventory = buildExchangeInventory([
  buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/users/123"
    },
    response: {
      status: 403
    }
  }),
  buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/orders/55"
    },
    response: {
      status: 403
    }
  })
]);

const report =
  evaluateCapturedSession(inventory);

if (
  report.findings.length !== 2
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("SESSION RUNTIME VERIFIED");
