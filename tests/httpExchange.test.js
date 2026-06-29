const {
  buildHttpExchange
} = require("../playwright/network/builders/buildHttpExchange");

const exchange = buildHttpExchange({
  request: {
    method: "GET",
    url: "https://example.com/api/users"
  },
  response: {
    status: 200,
    url: "https://example.com/api/users"
  }
});

if (
  exchange.request.method !== "GET" ||
  exchange.response.status !== 200
) {
  console.error("FAIL");
  process.exit(1);
}

console.log("HTTP EXCHANGE VERIFIED");
