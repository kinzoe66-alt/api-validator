const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const {
  buildExchangeInventory
} = require("../playwright/network/inventory/buildExchangeInventory");

const {
  extractEndpoints
} = require("../playwright/network/analysis/extractEndpoints");

const inventory = buildExchangeInventory([
  buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/users"
    },
    response: {
      status: 200
    }
  }),
  buildHttpExchange({
    request: {
      method: "GET",
      url: "https://example.com/api/users"
    },
    response: {
      status: 200
    }
  }),
  buildHttpExchange({
    request: {
      method: "POST",
      url: "https://example.com/api/login"
    },
    response: {
      status: 200
    }
  })
]);

const endpoints = extractEndpoints(inventory);

if (
  endpoints.length !== 2 ||
  endpoints[0].method !== "GET" ||
  endpoints[1].method !== "POST"
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("ENDPOINT EXTRACTION VERIFIED");
