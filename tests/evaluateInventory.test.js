const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  buildExchangeInventory
} = require("../playwright/network/inventory/buildExchangeInventory");

const {
  evaluateInventory
} = require("../playwright/network/runtime/evaluateInventory");

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

const results = evaluateInventory(inventory);

if (
  results.length !== 2 ||
  !results[0].evaluation.satisfied ||
  !results[1].evaluation.satisfied
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("INVENTORY EVALUATION VERIFIED");
