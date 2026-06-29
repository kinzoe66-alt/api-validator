const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  buildExchangeInventory
} = require("../playwright/network/inventory/buildExchangeInventory");

const inventory = buildExchangeInventory([
  buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/users"
    },
    response: {
      status: 200,
      url: "https://example.com/api/users"
    }
  })
]);

if (
  inventory.exchanges.length !== 1 ||
  inventory.exchanges[0].request.method !== "GET"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("EXCHANGE INVENTORY VERIFIED");
